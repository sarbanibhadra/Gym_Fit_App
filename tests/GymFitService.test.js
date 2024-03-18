const {
    getBodyParts,
    getBodyPartById,
    searchExercises,
    getExerciseById,
    searchMuscles,
    getMuscleById,
    getBmi,
} = require('../src/utils/GymFitService');

describe('GymFitService', () => {
    describe('getBodyParts', () => {
        it('should return an array of body parts', async () => {
            const bodyParts = await getBodyParts();
            console.log('Response from getBodyParts:', bodyParts);
            expect(Array.isArray(bodyParts)).toBe(true);
        });
    });

    describe('getBodyPartById', () => {
        it('should return information about a body part', async () => {
            const bodyPartId = '56289b46-92f9-4371-ba68-df381cf0fa64';  // Back - part of the body
            const bodyPartInfo = await getBodyPartById(bodyPartId);
            console.log('Response from getBodyPartById:', bodyPartInfo);
            expect(bodyPartInfo).toBeDefined();
        });

        it('should throw an error if an invalid body part ID is provided', async () => {
            await expect(getBodyPartById(null)).rejects.toThrow('Body part ID is required');
        });
    });

    describe('searchExercises', () => {
        it('should return an array of exercises based on the search criteria', async () => {
            const exercises = await searchExercises({ query: 'push-up' });
            console.log('Response from searchExercises:', exercises);
            expect(Array.isArray(exercises)).toBe(true);
        });
    });

    describe('getExerciseById', () => {
        it('should return information about an exercise by its ID', async () => {
            const exerciseId = '41aeff91-79d7-4d73-883d-f61d117dc0d8';  // Default exercise id
            const exerciseInfo = await getExerciseById(exerciseId);
            console.log('Response from getExerciseById:', exerciseInfo);
            expect(exerciseInfo).toBeDefined();
        });

        it('should throw an error if an invalid exercise ID is provided', async () => {
            await expect(getExerciseById(null)).rejects.toThrow('Exercise ID is required');
        });
    });

    describe('searchMuscles', () => {
        it('should return an array of muscles based on the search criteria', async () => {
            const muscles = await searchMuscles({ query: 'biceps' });
            console.log('Response from searchMuscles:', muscles);
            expect(Array.isArray(muscles)).toBe(true);
        });
    });

    describe('getMuscleById', () => {
        it('should return information about a muscle by its ID', async () => {
            const muscleId = '1800ee40-9e19-44ed-9a0f-f067bbcb4179';    // Biceps femoris, Legs
            const muscleInfo = await getMuscleById(muscleId);
            console.log('Response from getMuscleById:', muscleInfo);
            expect(muscleInfo).toBeDefined();
        });

        it('should throw an error if an invalid muscle ID is provided', async () => {
            await expect(getMuscleById(null)).rejects.toThrow('Muscle ID is required');
        });
    });

    describe('getBmi', () => {
        it('should calculate BMI based on weight and height', async () => {
            const weight = 78;
            const height = 180;
            const bmi = await getBmi(weight, height);
            console.log('BMI:', bmi);
            expect(bmi).toBeGreaterThan(0);
        });

        it('should throw an error if weight or height is not a number', async () => {
            await expect(getBmi('70', 175)).rejects.toThrow('must be numbers');
        });
    });
});