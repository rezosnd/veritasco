import { z } from 'zod';

// Input validation schemas
export const joinUsSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100, 'Full name too long'),
  email: z.string().email('Invalid email address').max(254, 'Email too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number too long'),
  position: z.string().min(1, 'Position is required').max(100, 'Position too long'),
  yearsOfExperience: z.number().min(0, 'Experience cannot be negative').max(70, 'Please enter a realistic experience level'),
  currentCompany: z.string().max(100, 'Company name too long').optional(),
  skills: z.string().min(5, 'Please provide some details about your skills').max(2000, 'Skills description too long'),
  whyInterested: z.string().min(10, 'Please tell us why you are interested').max(2000, 'Interest description too long'),
  pastExperience: z.string().min(10, 'Please provide some details about your experience').max(5000, 'Experience description too long'),
});

export const bookingSchema = z.object({
  schoolName: z.string().min(2, 'School name must be at least 2 characters').max(200, 'School name too long'),
  contactPerson: z.string().min(2, 'Contact person name must be at least 2 characters').max(100, 'Contact person name too long'),
  email: z.string().email('Invalid email address').max(254, 'Email too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number too long'),
  studentCount: z.number().min(1, 'Student count must be at least 1').max(10000, 'Student count seems unrealistic'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

export const otpSchema = z.object({
  email: z.string().email('Invalid email address').max(254, 'Email too long'),
  otp: z.string().length(6, 'OTP must be 6 digits').regex(/^\d{6}$/, 'OTP must contain only digits'),
});