from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)


# ============================================================
# LOAD WASTE DETECTION MODEL
# ============================================================

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "models",
    "waste_best.pt"
)

model = YOLO(MODEL_PATH)


# ============================================================
# WASTE CLASSIFICATION
# ============================================================

RECYCLABLE_CLASSES = [
    "cardboard",
    "glass",
    "metal",
    "paper",
    "plastic"
]

ORGANIC_CLASSES = [
    "organic"
]

SPECIAL_CLASSES = [
    "e-waste",
    "medical"
]


# ============================================================
# HELPER FUNCTIONS
# ============================================================

def get_bin(category):
    """
    Maps the AI-detected waste category
    to the appropriate smart bin.
    """

    category = category.lower().strip()

    if category in RECYCLABLE_CLASSES:
        return "Recyclable"

    if category in ORGANIC_CLASSES:
        return "Organic"

    if category in SPECIAL_CLASSES:
        return "Other"

    return "Other"


def get_decision(confidence):
    """
    Confidence-aware decision engine.

    85%+  -> Accepted
    60-84% -> Recheck Required
    <60%  -> Recheck Required
    """

    if confidence >= 85:
        return "Accepted"

    return "Recheck Required"


# ============================================================
# HOME / HEALTH CHECK
# ============================================================

@app.route("/", methods=["GET"])
def home():

    return jsonify({
        "status": "online",
        "service": "Zyphor AI Detection API",
        "model": "waste_best.pt",
        "classes": list(model.names.values())
    })


# ============================================================
# AI WASTE PREDICTION
# ============================================================

@app.route("/predict", methods=["POST"])
def predict():

    # --------------------------------------------------------
    # Check image upload
    # --------------------------------------------------------

    if "image" not in request.files:

        return jsonify({
            "error": "No image uploaded"
        }), 400


    image_file = request.files["image"]


    # --------------------------------------------------------
    # Validate filename
    # --------------------------------------------------------

    if image_file.filename == "":

        return jsonify({
            "error": "No image selected"
        }), 400


    try:

        # ----------------------------------------------------
        # Read image
        # ----------------------------------------------------

        image_bytes = image_file.read()

        image = Image.open(
            io.BytesIO(image_bytes)
        ).convert("RGB")


        # ----------------------------------------------------
        # Run YOLO inference
        # ----------------------------------------------------

        results = model(
            image,
            conf=0.25
        )


        detections = []


        # ----------------------------------------------------
        # Extract detections
        # ----------------------------------------------------

        for result in results:

            if result.boxes is None:
                continue


            for box in result.boxes:

                confidence = float(
                    box.conf[0]
                )

                class_id = int(
                    box.cls[0]
                )

                class_name = model.names[class_id]


                detections.append({
                    "category": class_name,
                    "confidence": round(
                        confidence * 100,
                        2
                    )
                })


        # ----------------------------------------------------
        # No object detected
        # ----------------------------------------------------

        if not detections:

            return jsonify({

                "category": "Unknown Waste",

                "confidence": 0,

                "bin": "Other",

                "decision": "Recheck Required",

                "message": "No recognizable waste detected"
            })


        # ----------------------------------------------------
        # Select highest-confidence detection
        # ----------------------------------------------------

        best_detection = max(
            detections,
            key=lambda x: x["confidence"]
        )


        category = best_detection["category"]

        confidence = best_detection["confidence"]


        # ----------------------------------------------------
        # Determine smart bin
        # ----------------------------------------------------

        bin_name = get_bin(category)


        # ----------------------------------------------------
        # Confidence-aware decision
        # ----------------------------------------------------

        decision = get_decision(
            confidence
        )


        # ----------------------------------------------------
        # Return result
        # ----------------------------------------------------

        return jsonify({

            "category": category,

            "confidence": confidence,

            "bin": bin_name,

            "decision": decision

        })


    # ========================================================
    # ERROR HANDLING
    # ========================================================

    except Exception as error:

        print(
            "Prediction Error:",
            str(error)
        )

        return jsonify({

            "error": str(error)

        }), 500


# ============================================================
# START SERVER
# ============================================================

if __name__ == "__main__":

    print(
        "============================================"
    )

    print(
        " Zyphor AI Waste Detection API"
    )

    print(
        "============================================"
    )

    print(
        f"Model: {MODEL_PATH}"
    )

    print(
        f"Classes: {model.names}"
    )

    print(
        "Server: http://127.0.0.1:5000"
    )

    print(
        "============================================"
    )


    app.run(

        host="127.0.0.1",

        port=5000,

        debug=True

    )