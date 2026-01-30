
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Instagram,
  Menu,
  X,
  ArrowRight,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
  ExternalLink,
  Shield,
  Star,
  ShoppingBag
} from 'lucide-react';
import { COLORS, SERVICES, PRODUCTS, WHY_US, TESTIMONIALS } from './constants';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Univers', href: '#services' },
    { name: 'Collection', href: '#collection' },
    { name: 'L\'Héritage', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'glass py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
            <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-serif text-[#D4AF37] font-bold text-lg bg-black">
              2L
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-[0.3em] font-bold leading-none">TAHA<span className="text-[#D4AF37]">2</span>LUXE</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-gray-500 mt-1">Maison d'Excellence</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[11px] uppercase tracking-[0.25em] font-medium text-gray-300 hover:text-[#D4AF37] transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/212606000495"
            target="_blank"
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20"
          >
            Commander
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-[0.3em] font-medium text-white hover:text-[#D4AF37] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/212606000495"
                className="bg-[#D4AF37] text-black px-6 py-4 rounded-xl text-center font-bold uppercase tracking-widest"
              >
                WhatsApp Direct
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vedios/herovediobackground.mp4" type="video/mp4" />
        </video>
        {/* Horizontal Gradient to improve text visibility on the left while keeping the video clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-[1]" />
        {/* Subtle bottom gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-[1]" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-left px-6 md:px-20 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] uppercase tracking-[0.6em] text-[10px] font-bold mb-8 backdrop-blur-sm">
            Excellence & Héritage
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-[0.9] tracking-tight">
            L'Art du <br /> <span className="text-[#D4AF37] italic">Temps.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-xl font-light leading-relaxed tracking-wide">
            Sublimez votre quotidien avec une sélection rigoureuse de pièces horlogères et de maroquinerie d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
            <motion.a
              whileHover={{ y: -5 }}
              href="#collection"
              className="group bg-white text-black px-12 py-5 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all duration-500 flex items-center gap-4 w-full sm:w-auto justify-center"
            >
              La Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://wa.me/212606000495"
              className="text-white border border-white/20 backdrop-blur-sm px-12 py-5 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/10 transition-all w-full sm:w-auto text-center"
            >
              Nous Contacter
            </motion.a>
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[11px] font-bold mb-4 block">Nos Domaines</span>
            <h2 className="text-4xl md:text-6xl font-serif">Un Savoir-faire <br /> Sans Compromis</h2>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10"></div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Chaque univers est le reflet d'une quête insatiable de perfection et de raffinement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{ delay: index * 0.15 }}
              className="group relative h-[600px] rounded-[32px] overflow-hidden bg-[#0a0a0a]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-auto">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#D4AF37] border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-3xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-[#D4AF37] font-bold uppercase text-[10px] tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
                  Explorer l'univers
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollectionSection = () => {
  return (
    <section id="collection" className="py-32 px-6 bg-white text-black rounded-[60px] relative z-10 -mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[11px]">Nouveautés</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">La Sélection <br /> du Moment</h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="text-black border-2 border-black/10 px-10 py-4 rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black hover:text-white transition-all flex items-center gap-3"
          >
            Tout Voir <ChevronRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-[#f9f9f9] mb-8 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-black">
                    <ShoppingBag size={18} />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-black text-white px-6 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                      <MessageCircle size={14} /> WhatsApp
                    </div>
                    <div className="bg-white/90 backdrop-blur text-[10px] px-4 py-2 rounded-full font-bold uppercase tracking-widest border border-black/5">
                      {product.category}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-serif mb-2 tracking-tight">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 uppercase text-[9px] tracking-[0.3em] font-bold">Édition Limitée</p>
                  <span className="text-sm font-bold text-[#D4AF37]">Sur Devis</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-40 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          <motion.div
            {...fadeUp}
            className="z-10 relative rounded-[40px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/10 z-10 mix-blend-overlay"></div>
            <img
              src="/images/ownerimage.png"
              alt="Maison Taha2Luxe Owner"
              className="w-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </motion.div>

          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-[#D4AF37]/20 rounded-tl-[40px] -z-1" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-r-2 border-b-2 border-[#D4AF37]/20 rounded-br-[40px] -z-1" />

          <div className="absolute bottom-10 -left-20 bg-white p-8 rounded-3xl shadow-2xl hidden xl:block z-20 max-w-[200px]">
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />)}
            </div>
            <p className="text-black text-xs font-bold leading-tight">"La référence incontournable de l'élégance à Oujda."</p>
          </div>
        </div>

        <motion.div {...fadeUp}>
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">Notre Vision</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1]">L'Excellence comme <br /> seul Standard.</h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light tracking-wide">
            Depuis notre atelier à Oujda, nous parcourons le monde pour dénicher des pièces qui racontent une histoire. Taha2Luxe n'est pas qu'une vitrine, c'est un engagement : celui de vous offrir le prestige sans l'arrogance.
          </p>

          <div className="grid gap-8">
            {WHY_US.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-start gap-8 group"
              >
                <div className="w-12 h-12 bg-[#111] rounded-2xl flex items-center justify-center text-[#D4AF37] border border-white/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Avis Clients</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">Paroles de Gentlemen</h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111]/50 backdrop-blur-sm p-12 rounded-[40px] border border-white/5 flex flex-col items-center text-center"
            >
              <div className="mb-8 relative">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]/30 p-1" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black">
                  <Shield size={14} />
                </div>
              </div>
              <p className="text-gray-300 italic mb-8 font-light text-lg leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest">{t.name}</h4>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-white text-black rounded-t-[60px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-24">
        <div className="lg:col-span-2">
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[11px] mb-6 block">Prendre Rendez-vous</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Commençons l'Expérience.</h2>
          <p className="text-gray-600 text-lg mb-16 leading-relaxed max-w-sm font-light">
            Une pièce vous intéresse ? Notre service client VIP vous répond en moins de 15 minutes sur WhatsApp.
          </p>

          <div className="grid gap-10">
            {[
              { icon: <MessageCircle />, label: 'WhatsApp direct', value: '+212 606-000495', link: 'https://wa.me/212606000495' },
              { icon: <MapPin />, label: 'Maison Mère', value: 'Oujda, Maroc' },
              { icon: <Instagram />, label: 'Instagram', value: '@taha2luxe', link: 'https://instagram.com/taha2luxe' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 mb-1">{item.label}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-xl font-medium hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                      {item.value} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-xl font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-[#f9f9f9] p-12 lg:p-16 rounded-[48px] shadow-sm border border-black/5">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300 font-medium text-lg" placeholder="Votre Nom" />
                </div>
                <div className="relative">
                  <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300 font-medium text-lg" placeholder="Numéro WhatsApp" />
                </div>
              </div>
              <div className="relative">
                <textarea rows={3} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-[#D4AF37] outline-none transition-all resize-none placeholder:text-gray-300 font-medium text-lg" placeholder="Dites-nous quel modèle vous fait rêver..." />
              </div>
              <motion.button
                whileHover={{ y: -5 }}
                className="w-full bg-black text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-4 shadow-xl"
              >
                Envoyer ma demande
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="grid lg:grid-cols-4 gap-16 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-serif text-[#D4AF37] font-bold text-lg">
                2L
              </div>
              <span className="text-2xl font-serif tracking-[0.2em] font-bold uppercase">TAHA<span className="text-[#D4AF37]">2</span>LUXE</span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-light">
              Dédiés à l'excellence et au raffinement pour une clientèle exigeante à travers tout le Maroc.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4AF37]">Navigation</h4>
            <div className="flex flex-col gap-6 text-[11px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Accueil</a>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Univers</a>
              <a href="#collection" className="hover:text-[#D4AF37] transition-colors">Catalogue</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4AF37]">Social</h4>
            <div className="flex gap-6">
              {[Instagram, MessageCircle, Phone].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-[9px] uppercase tracking-[0.3em] text-gray-600 gap-8">
          <p>© 2024 Maison Taha2Luxe. L'excellence au service de l'élégance.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <Hero />
      <ServicesSection />
      <CollectionSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* Premium WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/212606000495"
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white w-20 h-20 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] flex items-center justify-center group"
      >
        <MessageCircle size={36} />
        <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur text-white px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
          Besoin d'aide ?
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-black/90"></div>
        </div>
      </motion.a>
    </div>
  );
}
