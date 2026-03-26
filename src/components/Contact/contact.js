import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { supabase } from "../../supabaseClient";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { data, error } = await supabase
    .from("contacts")
    .insert([formData]);

  if (error) {
    console.error(error);
    setStatus("Error sending message!");
  } else {
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  }
};

  return (
    <div>
        <Container
            fluid
            className="project-section"
            style={{
                minHeight: "calc(102vh - 80px)", 
                position: "relative",
                zIndex: 1
                }}
            >
        <Particle />

        <Container style={{ position: "relative", zIndex: 2 }}>
          <h1 className="project-heading">
            Contact <strong className="purple">Me</strong>
          </h1>

          <p style={{ color: "white" }}>
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            <Col md={6} style={{ position: "relative", zIndex: 3 }}>
              <Form
                onSubmit={handleSubmit}
                className="p-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)"
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div style={{ textAlign: "center" }}>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </div>

                {status && (
                  <p
                    style={{
                      color: "#00ffcc",
                      marginTop: "15px",
                      textAlign: "center"
                    }}
                  >
                    {status}
                  </p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;