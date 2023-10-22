import cv2
import dlib
from math import hypot
import os
import pygame
import random
import time
from threading import Thread

# Constants
ATTENTION_THRESHOLD = 0.21  # Adjust this threshold as needed
AUDIO_DIRECTORY = os.path.expanduser("~/Downloads")
FOCUSED_AUDIO = 'simply-meditation-series-11hz-alpha-binaural-waves-for-relaxed-focus-8028.mp3'
STRESSED_AUDIO = 'WhatsApp Audio 2023-10-21 at 4.44.47 PM.mpeg'

# Initialize pygame mixer
pygame.mixer.init()

# Load audio files
focused_audio_path = os.path.join(AUDIO_DIRECTORY, FOCUSED_AUDIO)
stressed_audio_path = os.path.join(AUDIO_DIRECTORY, STRESSED_AUDIO)
def midpoint(p1, p2):
    return int((p1.x + p2.x) / 2), int((p1.y + p2.y) / 2)

# Function for detecting attention and playing audio
def detect_attention():
    cap = cv2.VideoCapture(0)
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
    font = cv2.FONT_HERSHEY_PLAIN
    start_time = time.time()
    while True:
        _, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)
        attention = False  # Initialize the attention flag

        for face in faces:
            landmarks = predictor(gray, face)

            left_eye_landmarks = []
            right_eye_landmarks = []

            for i in range(36, 42):
                x, y = landmarks.part(i).x, landmarks.part(i).y
                left_eye_landmarks.append((x, y))

            for i in range(42, 48):
                x, y = landmarks.part(i).x, landmarks.part(i).y
                right_eye_landmarks.append((x, y))

            left_ear = calculate_ear(left_eye_landmarks)
            right_ear = calculate_ear(right_eye_landmarks)

            # Calculate the average EAR of both eyes
            ear = (left_ear + right_ear) / 2

            # Calculate eye center
            left_eye_center = midpoint(landmarks.part(36), landmarks.part(39))
            right_eye_center = midpoint(landmarks.part(42), landmarks.part(45))

            # Calculate the distance from the eye center to the iris
            left_eye_radius = hypot(left_eye_center[0] - landmarks.part(37).x, left_eye_center[1] - landmarks.part(37).y)
            right_eye_radius = hypot(right_eye_center[0] - landmarks.part(43).x, right_eye_center[1] - landmarks.part(43).y)

            if ear < ATTENTION_THRESHOLD:  # Eye mostly closed
                attention = True
                print("Blinking")
            elif (left_eye_radius >= 6) or (right_eye_radius >= 6):  # Iris near edge
                attention = True
                print("Paying Attention")

        if not attention:
            elapsed_time = time.time() - start_time
            if elapsed_time > 10:  # Adjust the time threshold here
                if os.path.exists(stressed_audio_path):
                    pygame.mixer.music.load(stressed_audio_path)
                    pygame.mixer.music.play()
                print("Not Paying Attention")
                print(elapsed_time)
        else:
            start_time = time.time()

        key = cv2.waitKey(1)
        if key == 27:
            break

    cap.release()
    cv2.destroyAllWindows()

# Function to calculate eye aspect ratio (EAR)
def calculate_ear(eye_landmarks):
    vertical_dist1 = hypot(eye_landmarks[1][0] - eye_landmarks[5][0], eye_landmarks[1][1] - eye_landmarks[5][1])
    vertical_dist2 = hypot(eye_landmarks[2][0] - eye_landmarks[4][0], eye_landmarks[2][1] - eye_landmarks[4][1])
    horizontal_dist = hypot(eye_landmarks[0][0] - eye_landmarks[3][0], eye_landmarks[0][1] - eye_landmarks[3][1])
    ear = (vertical_dist1 + vertical_dist2) / (2.0 * horizontal_dist)
    return ear

# Start the attention detection in a separate thread
attention_thread = Thread(target=detect_attention)
attention_thread.start()

# Function to generate random stress levels
def generate_dummy_stress_data():
    return random.randint(0, 100)

# Main thread can continue with other tasks
while True:
    stress_level = generate_dummy_stress_data()
    print("Generated Stress Level:", stress_level)
    # Add logic here to update stress_level as needed
    # For now, let's assume it's randomly updated
    if stress_level > 50:
        if os.path.exists(focused_audio_path):
            pygame.mixer.music.load(focused_audio_path)
            pygame.mixer.music.play()
        time.sleep(10)  # Play music for 10 seconds
    else:
        if os.path.exists(stressed_audio_path):
            pygame.mixer.music.load(stressed_audio_path)
            pygame.mixer.music.play()
        time.sleep(10)  # Play music for 10 seconds
    time.sleep(5)  #
