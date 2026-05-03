import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  QrCode, 
  ChefHat, 
  Receipt, 
  CreditCard, 
  MonitorPlay, 
  Bell,
  CheckCircle,
  Clock,
  UserX,
  TrendingDown,
  Smartphone,
  ShieldCheck,
  Store,
  Users,
  Star,
  Coffee,
  Beer,
  Pizza,
  IceCream,
  Utensils,
  Wine,
  Cloud,
  Cake,
  Building2
} from "lucide-react";

const outletTypes = [
  { name: "Food courts & canteens", icon: Utensils, fakeRestro: "Metro Canteen", rating: "4.6" },
  { name: "Caffe", icon: Coffee, fakeRestro: "Brew & Co", rating: "4.8" },
  { name: "Fine dine", icon: Wine, fakeRestro: "Le Gourmet", rating: "4.9" },
  { name: "Bar & brewery", icon: Beer, fakeRestro: "The Draft House", rating: "4.7" },
  { name: "Pizzeria", icon: Pizza, fakeRestro: "Luigi's Slice", rating: "4.8" },
  { name: "QSR", icon: Store, fakeRestro: "QuickBite Express", rating: "4.5" },
  { name: "Desserts", icon: IceCream, fakeRestro: "Sweet Treats", rating: "4.9" },
  { name: "Large chains", icon: Building2, fakeRestro: "Burger Nation", rating: "4.7" },
  { name: "Bakery", icon: Cake, fakeRestro: "Morning Bliss Bakery", rating: "4.8" },
  { name: "Cloud kitchens", icon: Cloud, fakeRestro: "Ghost Chef Kitchens", rating: "4.6" },
];

const features = [
  { icon: QrCode, title: "QR-Based Ordering", desc: "Customers scan and start ordering instantly — no app required." },
  { icon: MonitorPlay, title: "Real-Time Kitchen Display", desc: "Orders go live to the kitchen the moment they are placed." },
  { icon: Receipt, title: "Smart Billing System", desc: "Running bill updates automatically with every item added." },
  { icon: CreditCard, title: "Direct UPI Payment", desc: "Customers pay directly to your account — fast and seamless." },
  { icon: ShieldCheck, title: "Table Session System", desc: "Each table runs on a controlled session — secure and organized." },
  { icon: Bell, title: "Live Notifications", desc: "Kitchen and waiters get instant updates for every order." },
];

const steps = [
  { step: 1, title: "Table Activation", desc: "Waiter activates the table session from the dashboard." },
  { step: 2, title: "Scan & Start", desc: "Customer scans the QR code placed on the table." },
  { step: 3, title: "Instant Access", desc: "Menu opens instantly — no app, no login hassle." },
  { step: 4, title: "Order Anytime", desc: "Customer adds items anytime during their dining." },
  { step: 5, title: "Kitchen Receives", desc: "Orders appear instantly on the kitchen display." },
  { step: 6, title: "Live Bill Tracking", desc: "Bill keeps updating in real-time with each item." },
  { step: 7, title: "Generate Final Bill", desc: "Waiter generates the bill once customer is done." },
  { step: 8, title: "Easy Payment", desc: "Customer pays via UPI QR with exact amount." },
  { step: 9, title: "Session Closed", desc: "Payment confirmed → table resets automatically." },
];

import { PageWrapper } from "@/components/page-wrapper";
export default function PossPage() {
  return (
    <PageWrapper hideHero>
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                VeritasCo POS <br/>
                <span className="text-primary">Turn Every Table Into a Smart Ordering System</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                Give your customers the power to order instantly. Run your restaurant faster, smarter, and error-free.
              </p>
              <p className="text-xl font-medium text-slate-800 mb-8">
                No App. No Waiting. No Mistakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join-us" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#demo" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition">
                  Book Live Demo
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl bg-white border border-slate-100">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400">
                   Image: posshome.png
                </div>
                <Image
                  src="/posshome.png"
                  alt="VeritasCo POS Interface"
                  width={800}
                  height={600}
                  className="object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTLET TYPES SECTION (Based on provided image context) */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wider uppercase mb-2">Outlet Types</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for all types of food business</h2>
          <p className="text-primary-foreground mb-16 max-w-2xl mx-auto">
            The all-in-one Restaurant Management System for all types of restaurant formats and food outlets
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {outletTypes.map((type, idx) => (
              <div key={idx} className="bg-primary/50 p-6 rounded-xl border border-primary/30 hover:bg-primary/50 transition">
                <type.icon className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
                <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                <div className="bg-primary-foreground/10 rounded-lg p-3 mt-4 text-sm text-primary-foreground">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{type.rating}/5</span> Industry Rating
                  </div>
                  <p className="italic text-xs opacity-80">Used by {type.fakeRestro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 — PROBLEM VS SOLUTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* The Problem */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Restaurants Are Still Stuck in Manual Work</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-600">Orders get delayed or missed</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-600">Billing mistakes cause losses</span>
                </li>
                <li className="flex items-start">
                  <UserX className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-600">Staff dependency slows everything down</span>
                </li>
                <li className="flex items-start">
                  <MonitorPlay className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-600">Kitchen doesn't get real-time updates</span>
                </li>
              </ul>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-primary font-medium flex gap-3">
                <ArrowRight className="w-5 h-5 mt-0.5 shrink-0" />
                This leads to poor customer experience and lost revenue.
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 text-white">
              <h2 className="text-3xl font-bold mb-6">One System. Complete Control.</h2>
              <p className="text-slate-300 mb-8">
                VeritasCo POS replaces manual operations with a fully digital, real-time system:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                  <span className="text-slate-200">Customers order directly from their phone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                  <span className="text-slate-200">Kitchen receives orders instantly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                  <span className="text-slate-200">Bills update automatically</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                  <span className="text-slate-200">Payments happen smoothly at the end</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORE FEATURES */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for Real Restaurant Operations</h2>
            <p className="text-lg text-slate-600">Everything you need to automate your daily workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From Entry to Exit — Fully Automated Flow</h2>
            <p className="text-lg text-slate-600">The simplest step-by-step process for your staff and customers.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.step} className="relative p-6 border border-slate-200 rounded-xl bg-slate-50">
                  <div className="text-primary font-black text-4xl mb-4 opacity-20 absolute top-4 right-6">0{step.step}</div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2 mt-2">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUILT-IN SECURITY */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Real-World Usage & Security</h2>
              <p className="text-slate-400 mb-8 text-lg">Your system stays protected — even with printed QR codes.</p>
              <ul className="space-y-4">
                {[
                  "Table activation required before ordering",
                  "Location-based access control",
                  "Session expiry to prevent misuse",
                  "Payment confirmation before closing",
                  "Optional OTP & device binding"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-8 border border-slate-700 rounded-2xl">
              <ShieldCheck className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Secure Table Sessions</h3>
              <p className="text-slate-400">
                You have full control over who orders and when. Fake orders and misuse are completely eliminated through our robust session token system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8 — MULTI-RESTAURANT & IMPACT */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
              <Store className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">One Platform. Unlimited Restaurants.</h2>
              <p className="text-slate-600 mb-6">VeritasCo POS is built as a scalable SaaS platform:</p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Each restaurant gets isolated data</li>
                <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Independent dashboards for staff</li>
                <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Custom menus, tables, and workflows</li>
                <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Central control from one system</li>
              </ul>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
              <TrendingDown className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Real Business Impact</h2>
              <p className="text-slate-600 mb-6">What You Gain:</p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center text-slate-700">⚡ Faster service and table turnover</li>
                <li className="flex items-center text-slate-700">📉 Reduced dependency on staff</li>
                <li className="flex items-center text-slate-700">❌ No manual billing errors</li>
                <li className="flex items-center text-slate-700">📈 Better control over operations</li>
                <li className="flex items-center justify-between bg-green-50 text-green-800 p-3 rounded-lg border border-green-200 mt-4">
                  <span>💰 Direct payments — no commission loss</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — DESIGNED FOR EVERY ROLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Designed for Every Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <Smartphone className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Customer</h3>
              <p className="text-slate-600 font-medium">Scan → Order → Pay → Done</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <ChefHat className="w-10 h-10 mx-auto text-orange-600 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Kitchen</h3>
              <p className="text-slate-600 font-medium">See orders → Prepare → Update</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <Users className="w-10 h-10 mx-auto text-purple-600 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Waiter</h3>
              <p className="text-slate-600 font-medium">Manage tables → Generate bills</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <MonitorPlay className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Admin</h3>
              <p className="text-slate-600 font-medium">Control menu → View insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-24 bg-primary text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Modernize Your Restaurant?</h2>
          <p className="text-xl text-primary-foreground mb-10">Stop managing chaos. Start running a smart system.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join-us" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-primary-700 bg-white hover:bg-slate-100 transition shadow-xl">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-lg text-white hover:bg-red-800 transition">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}


