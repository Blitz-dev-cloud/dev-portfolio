import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Copy,
  Check,
} from "lucide-react";

const ContactSection = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("alex.johnson@student.edu");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Blitz-dev-cloud",
      label: "GitHub",
      color: "hover:text-gray-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sounak-maity-79a116290/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDark ? "bg-gray-900/50" : "bg-purple-50/50"
      } relative overflow-hidden`}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -right-4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-4 -left-4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-6`}
          >
            Let's Connect!
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            I'm always excited to discuss new opportunities, collaborate on
            projects, or just chat about technology!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-6`}
              >
                Get In Touch
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } rounded-lg shadow-sm border`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
                      } text-sm`}
                    >
                      Email
                    </p>
                    <p
                      className={`${
                        isDark ? "text-white" : "text-gray-900"
                      } font-medium`}
                    >
                      sounak1629@gmail.com
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={copyEmail}
                    className={`p-2 ${
                      isDark
                        ? "text-gray-400 hover:text-purple-400"
                        : "text-gray-500 hover:text-purple-600"
                    } transition-colors`}
                  >
                    {emailCopied ? <Check size={16} /> : <Copy size={16} />}
                  </motion.button>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } rounded-lg shadow-sm border`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
                      } text-sm`}
                    >
                      Phone
                    </p>
                    <p
                      className={`${
                        isDark ? "text-white" : "text-gray-900"
                      } font-medium`}
                    >
                      (+91) 8900560169
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } rounded-lg shadow-sm border`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
                      } text-sm`}
                    >
                      Location
                    </p>
                    <p
                      className={`${
                        isDark ? "text-white" : "text-gray-900"
                      } font-medium`}
                    >
                      Chennai, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-4`}
              >
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    } rounded-lg shadow-sm border flex items-center justify-center ${
                      isDark
                        ? "text-gray-400 hover:text-purple-400"
                        : "text-gray-600 hover:text-purple-600"
                    } transition-colors`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className={`${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } p-8 rounded-xl shadow-lg border`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border ${
                      isDark
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border ${
                      isDark
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border ${
                      isDark
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none`}
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
