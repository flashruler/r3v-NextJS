import { APIRoute } from 'next-s3-upload';

export default APIRoute.configure({
  key(req, filename) {
    return `my/uploads/path/${filename.toUpperCase()}`;
  },
});