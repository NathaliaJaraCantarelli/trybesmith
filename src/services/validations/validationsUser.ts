import User from '../../interfaces/user.interface';
import schemas from './schemas';

const validateUser = (userDetails: User) => schemas.user.validate(userDetails);

export default { validateUser };