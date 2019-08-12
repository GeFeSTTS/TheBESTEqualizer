import effects from '../controllers/effects';
import auth from '../controllers/authentication';
import authMiddleware from '../middlewares/auth';

export default (app) => {
  app.post('/registration', auth.registerUser);
  app.post('/login', auth.loginUser);

  app.get('/titles', authMiddleware, effects.getUserTitles);
  app.get('/effects', authMiddleware, effects.getEffectsList);
  app.post('/effects', authMiddleware, effects.saveEffect);
  app.delete('/effects', authMiddleware, effects.deleteEffect);
};
