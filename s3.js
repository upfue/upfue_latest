import { S3Client } from "aws-sdk/client-s3";

const s3 = new S3Client();

const BUCKET = process.env.BUCKET;

const uploadToS3 = async ({ file, userId }) => {
  const key = `${userId}/${uuid()}`;
  const command = new PutObjectCommand
};
