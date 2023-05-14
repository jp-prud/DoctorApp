import { Router } from 'express';

import appointmentRouter from '@modules/appointment/routes/appointment.routes';
import specialityRouter from '@modules/speciality/routes/speciality.routes';
import patientRouter from '@modules/patient/routes/patient.routes';
import doctorRouter from '@modules/doctor/routes/doctor.routes';
import feedbackRouter from '@modules/feedback/routes/feedback.routes';
import prescriptionRouter from '@modules/prescription/routes/prescription.routes';

const router = Router();

router.use('/appointments', appointmentRouter);

router.use('/specialities', specialityRouter);

router.use('/patienties', patientRouter);

router.use('/doctors', doctorRouter);

router.use('/feedbacks', feedbackRouter);

router.use('/prescription', prescriptionRouter);

export default router;
