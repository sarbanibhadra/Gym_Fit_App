# GymFitService Documentation

## Introduction
GymFitService is a module that provides functions to interact with the GymFit API, allowing users to retrieve information about body parts, exercises, muscles, and calculate BMI.

## Installation
To use GymFitService in your project, follow these steps:
1. Install the axios package: `npm install axios`
2. Import GymFitService in your project: `const GymFitService = require('./GymFitService');`

## Methods

### getBodyParts()
Retrieves a list of body parts.

#### Returns
- **Array**: List of body parts, each containing:
    - `id`: Body part ID
    - `name`: Body part name
    - `muscles`: List of muscles associated with the body part, each containing:
        - `id`: Muscle ID
        - `name`: Muscle name

### getBodyPartById(id)
Retrieves information about a body part by its ID.

#### Parameters
- `id` (string): The ID of the body part to retrieve.

#### Returns
- **Object**: Information about the body part, including its name and associated muscles.

### searchExercises(params)
Searches for exercises based on optional parameters.

#### Parameters
- `params` (Object, optional): Optional parameters for the search.
    - `offset` (number, optional): Number of results to skip (between 0 and 300).
    - `query` (string, optional): The partial or full exercise name to search for.
    - `number` (number, optional): Number of expected results (between 1 and 50).
    - `bodyPart` (string, optional): Specifies the body part for filtering exercises (Back, Chest, Shoulders, Legs, Arms, Core).

#### Returns
- **Array**: List of exercises matching the search criteria, each containing:
    - `id`: Exercise ID
    - `name`: Exercise name
    - `bodyParts`: List of associated body parts

### getExerciseById(id)
Retrieves information about an exercise by its ID.

#### Parameters
- `id` (string): The ID of the exercise to retrieve.

#### Returns
- **Object**: Information about the exercise, including its name, associated muscles, body parts, alternatives, variations, and instructions.

### searchMuscles(params)
Searches for muscles based on optional parameters.

#### Parameters
- `params` (Object, optional): Optional parameters for the search.
    - `offset` (number, optional): Number of results to skip (between 0 and 300).
    - `query` (string, optional): The partial or full muscle name to search for.
    - `number` (number, optional): Number of expected results (between 1 and 50).

#### Returns
- **Array**: List of muscles matching the search criteria, each containing:
    - `id`: Muscle ID
    - `name`: Muscle name
    - `bodyPart`: Associated body part
        - `id`: Body part ID
        - `name`: Body part name
    - `exercises`: List of exercises associated with the muscle

### getMuscleById(id)
Retrieves information about a muscle by its ID.

#### Parameters
- `id` (string): The ID of the muscle to retrieve.

#### Returns
- **Object**: Information about the muscle, including its name, associated body part, and exercises.

### getBmi(weight, height)
Calculates the Body Mass Index (BMI) based on the provided weight and height.

#### Parameters
- `weight` (number): Weight in kilograms.
- `height` (number): Height in centimeters.

#### Returns
- **number**: The Body Mass Index (BMI) value.