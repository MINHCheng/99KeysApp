import React, { useState } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageUploader.css'; // Create this CSS file for custom styling

const Image = () => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-4">
      <Card
        className="text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Card.Body>
          {image ? (
            <img src={image} alt="Uploaded" className="uploaded-image" />
          ) : (
            <p className="text-muted">Drag & drop or click to upload an image</p>
          )}
          <Form.File
            id="custom-file"
            label="Choose File"
            custom
            onChange={handleFileSelect}
          />
        </Card.Body>
      </Card>
    </Container>
  )
}
export default Image
