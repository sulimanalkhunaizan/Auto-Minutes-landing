import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Avatar, AvatarFallback } from '../ui/Avatar';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechCorp",
    content: "AutoMinutes has been a game-changer for our team. What used to take 30 minutes now happens instantly. We can focus on execution instead of documentation.",
    rating: 5,
    initials: "SJ",
    color: "bg-blue-600"
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "InnovateLabs",
    content: "The action item extraction is incredibly accurate. Our team never misses a task anymore, and everyone knows exactly what they need to do.",
    rating: 5,
    initials: "MC",
    color: "bg-purple-600"
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "Global Finance",
    content: "We've saved over 20 hours per month across our organization. The ROI was immediate, and our meeting culture has completely transformed.",
    rating: 5,
    initials: "ER",
    color: "bg-green-600"
  },
  {
    name: "David Park",
    role: "Startup Founder",
    company: "StartupHub",
    content: "As a startup, every minute counts. AutoMinutes lets us move fast without losing track of important decisions and commitments.",
    rating: 5,
    initials: "DP",
    color: "bg-blue-500"
  },
  {
    name: "Lisa Thompson",
    role: "HR Manager",
    company: "HealthFirst",
    content: "The multi-language support is fantastic. We have global teams, and AutoMinutes handles everything seamlessly. It's like having a personal assistant in every meeting.",
    rating: 5,
    initials: "LT",
    color: "bg-purple-500"
  },
  {
    name: "James Wilson",
    role: "Consultant",
    company: "Independent",
    content: "Client meetings are so much more productive now. I can focus on the conversation while AutoMinutes captures everything perfectly. My clients love the detailed follow-ups.",
    rating: 5,
    initials: "JW",
    color: "bg-green-500"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Loved by Teams Everywhere
          </h2>
          <p className="text-xl text-gray-600">
            See how AutoMinutes is transforming the way teams handle meeting documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group border-2 border-gray-200 hover:border-blue-600/50 hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/95 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-blue-600/20 group-hover:text-blue-600/40 transition-colors" />
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-800 leading-relaxed min-h-[100px]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`${testimonial.color} text-white font-semibold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">4.9/5</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600">Happy Companies</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600">10K+</p>
                <p className="text-sm text-gray-600">Meetings Processed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
