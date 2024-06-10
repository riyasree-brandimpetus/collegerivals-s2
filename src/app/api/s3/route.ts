import { NextRequest, NextResponse } from 'next/server';
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';

const client = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const bucketFolderName = 'uploads/';
  const fileName = file.name;
  console.log('buffer', file.name);
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: bucketFolderName + fileName,
    Body: buffer,
    ContentType: file.type, // Specify the ContentType based on the file's MIME type
  });
  try {
    const putResponse = await client.send(command);
    console.log('put', putResponse);
    console.log('File uploaded successfully');
    const url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${file.name}`;
    return NextResponse.json({ success: true, url: url });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}