import { S3 } from "aws-sdk"

const s3 = new S3()
const BUCKET = process.env.BUCKET
s3.config.update({
    region: 'us-east-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  
  });

const uploadPostImage = async ({file,userId,imageId}) => {

    const params = {
        Bucket: BUCKET,
        Body: file.buffer,
        Key: `${userId}/post-${imageId}`,
        ContentType: file.mimetype
    }

    try{
        const data = await s3.upload(params).promise()
        console.log(data.Key)
    }catch(error){
        throw error;
    }

}