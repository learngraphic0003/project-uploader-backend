// uploadAvatar.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinary } from '../utils/cloudinary.js';

const avatarStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'Uploader',
    format: file.mimetype === 'image/png' ? 'png' : 'jpeg',
    public_id: `image-${Date.now()}`,
  }),
});

const uploadAvatar = multer({ storage: avatarStorage }).single('image');

export default uploadAvatar;
