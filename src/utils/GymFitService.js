/*
Placing all API logic in one file GymFitService.js will provide better organization of the code.
All functions will be available from one place.
 */
import { default as request } from "axios";

// Base URL for GymFit API
const BASE_URL = 'https://gym-fit.p.rapidapi.com';

// API key and host for Gym Fit API
const apiKey = '05068b6f42msh932569126a3931dp16a37bjsn108bbdc77e6f';
const host = 'gym-fit.p.rapidapi.com';

// Headers required for API requests
const headers = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': host
};

const params = {
    number: '8',
    bodyPart: 'Legs',
    offset: '5'
  };

/**
 * Retrieves a list of body parts.
 *
 * @returns {Array} List of body parts, each containing:
 *   {
 *     "id": "",                 // Body part ID
 *     "name": "",               // Body part name
 *     "muscles": [              // List of muscles associated with the body part
 *       {
 *         "id": "",             // Muscle ID
 *         "name": ""            // Muscle name
 *       }
 *     ]
 *   }
 */
async function getBodyParts() {
    const options = {
        method: 'GET',
        url: `${BASE_URL}/body-parts`,
        headers: headers
    };

    try {
        const response = await request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Retrieves information about a body part by its ID.
 *
 * @param {string} id - The ID of the body part to retrieve.
 * @returns {Object} Information about the body part, including its name and associated muscles.
 *   {
 *     "name": "",               // Body part name
 *     "muscles": [              // List of muscles associated with the body part
 *       {
 *         "id": "",             // Muscle ID
 *         "name": ""            // Muscle name
 *       }
 *     ]
 *   }
 * @throws {Error} If failed to retrieve body part.
 */
async function getBodyPartById(id) {
    if (!id || typeof id !== 'string') {
        throw new Error('Body part ID is required and must be a string');
    }

    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/body-parts/body-part/${id}`,
            headers: headers
        };
        const response = await request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to retrieve body part');
    }
}

/**
 * Searches for exercises based on optional parameters.
 *
 * @param {Object} [params] - Optional parameters for the search.
 * @param {number} [params.offset] - Number of results to skip (between 0 and 300).
 * @param {string} [params.query] - The partial or full exercise name to search for.
 * @param {number} [params.number] - Number of expected results (between 1 and 50).
 * @param {string} [params.bodyPart] - Specifies the body part for filtering exercises (Back, Chest, Shoulders, Legs, Arms, Core).
 * @returns {Array} List of exercises matching the search criteria, each containing:
 *   {
 *     "id": "",                  // Exercise ID
 *     "name": "",                // Exercise name
 *     "bodyParts": []            // List of associated body parts
 *   }
 */
async function searchExercises(param = {}) {
    try {
        params.bodyPart = param;
        const options = {
            method: 'GET',
            url: `${BASE_URL}/exercises/search`,
            headers: headers,
            params: params
        };
        const response = await request(options);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to search for exercises');
    }
}

/**
 * Retrieves information about an exercise by its ID.
 *
 * @param {string} id - The ID of the exercise to retrieve.
 * @returns {Object} Information about the exercise, including its name, associated muscles, body parts, alternatives, variations, and instructions.
 *   {
 *     "name": "",                            // Exercise name
 *     "muscles": [],                        // List of associated muscles
 *     "bodyParts": [],                      // List of associated body parts
 *     "alternatives": [                    // List of alternative exercises
 *       {
 *         "id": "",                        // Alternative exercise ID
 *         "name": ""                       // Alternative exercise name
 *       }
 *     ],
 *     "variations": [                      // List of exercise variations
 *       {
 *         "id": "",                        // Variation ID
 *         "name": ""                       // Variation name
 *       }
 *     ],
 *     "instructions": [                    // List of instructions for the exercise
 *       {
 *         "description": "",               // Instruction description
 *         "order": 0                       // Order of the instruction
 *       }
 *     ]
 *   }
 */
async function getExerciseById(id) {
    if (!id || typeof id !== 'string') {
        throw new Error('Exercise ID is required and must be a string');
    }

    const url = `${BASE_URL}/exercises/exercise/${id}`;
    const options = {
        method: 'GET',
        url: url,
        headers: headers
    };

    try {
        const response = await request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}

/**
 * Searches for muscles based on optional parameters.
 *
 * @param {Object} [params] - Optional parameters for the search.
 * @param {number} [params.offset] - Number of results to skip (between 0 and 300).
 * @param {string} [params.query] - The partial or full muscle name to search for.
 * @param {number} [params.number] - Number of expected results (between 1 and 50).
 * @returns {Array} List of muscles matching the search criteria, each containing:
 *   {
 *     "id": "",                  // Muscle ID
 *     "name": "",                // Muscle name
 *     "bodyPart": {              // Associated body part
 *       "id": "",                // Body part ID
 *       "name": ""               // Body part name
 *     },
 *     "exercises": [             // List of exercises associated with the muscle
 *       {
 *         "id": "",              // Exercise ID
 *         "name": ""             // Exercise name
 *       }
 *     ]
 *   }
 */

async function searchMuscles(params = {}) {
    try {
        const options = {
            method: 'GET',
            url: `${BASE_URL}/muscles/search`,
            headers: headers,
            params: params
        };
        const response = await request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to search for muscles');
    }
}

/**
 * Retrieves information about a muscle by its ID.
 *
 * @param {string} id - The ID of the muscle to retrieve.
 * @returns {Object} {
 *   "name": "",           // Name of the muscle
 *   "bodyPart": {         // Associated body part
 *     "id": "",           // Body part ID
 *     "name": ""          // Body part name
 *   },
 *   "exercises": [        // List of exercises associated with the muscle
 *     {
 *       "id": "",         // Exercise ID
 *       "name": ""        // Exercise name
 *     }
 *   ]
 * }
 */

async function getMuscleById(id) {
    if (!id || typeof id !== 'string') {
        throw new Error('Muscle ID is required and must be a string');
    }

    const url = `${BASE_URL}/muscles/muscle/${id}`;
    const options = {
        method: 'GET',
        url: url,
        headers: headers
    };

    try {
        const response = await request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Calculates the Body Mass Index (BMI) based on the provided weight and height.
 *
 * @param {number} weight - Weight in kilograms.
 * @param {number} height - Height in centimeters.
 * @returns {number} The Body Mass Index (BMI) value.
 */
async function getBmi(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        throw new Error('Both weight and height must be numbers');
    }

    const url = `${BASE_URL}/calculator/bmi`;
    const options = {
        method: 'GET',
        url: url,
        params: {
            weight: weight,
            height: height
        },
        headers: headers
    };

    try {
        const response = await request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default {
    getBodyParts,
    getBodyPartById,
    searchExercises,
    getExerciseById,
    searchMuscles,
    getMuscleById,
    getBmi,
};