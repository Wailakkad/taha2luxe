
import React from 'react';
import { Watch, Briefcase, Gem, Truck, ShieldCheck, Award } from 'lucide-react';
import { Service, Product, Testimonial } from './types';

export const COLORS = {
  primary: '#D4AF37', // Gold
  secondary: '#C0C0C0', // Silver
  bg: '#050505',
  card: '#111111',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Horlogerie de Luxe',
    description: 'Une sélection méticuleuse de montres prestigieuses alliant mécanique de précision et esthétique intemporelle.',
    icon: <Watch className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Maroquinerie Fine',
    description: 'Portefeuilles et accessoires en cuir d\'exception, inspirés des plus grandes maisons de couture.',
    icon: <Briefcase className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Bijouterie & Accessoires',
    description: 'Bracelets, bagues et accessoires raffinés pour parfaire votre style avec une touche d\'éclat.',
    icon: <Gem className="w-6 h-6" />,
    image: 'https://i.pinimg.com/736x/79/15/80/7915807a233513aa550cff615e5c67a5.jpg'
  }
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Royal Oak Skeleton', category: 'Montres', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=500' },
  { id: 'p2', name: 'Card Holder Noir', category: 'Maroquinerie', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=500' },
  { id: 'p3', name: 'Bracelet Croco Gold', category: 'Accessoires', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500' },
  { id: 'p4', name: 'Submariner Date', category: 'Montres', image: 'https://i.pinimg.com/736x/96/63/70/966370bdf9cb5369660a65aa24a3f617.jpg' },
  { id: 'p5', name: 'Portefeuille Signature', category: 'Maroquinerie', image: 'https://i.pinimg.com/1200x/50/e5/ef/50e5ef3394c1e90a08cbfa09421e433e.jpg' },
  { id: 'p6', name: 'Master Classic', category: 'Montres', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=500' },
];

export const WHY_US = [
  { title: 'Qualité Supérieure', icon: <Award />, desc: 'Chaque pièce est rigoureusement sélectionnée pour son excellence.' },
  { title: 'Livraison Express', icon: <Truck />, desc: 'Livraison sécurisée partout au Maroc dans les plus brefs délais.' },
  { title: 'Confiance & Sécurité', icon: <ShieldCheck />, desc: 'Un service client dédié pour vous accompagner dans vos achats.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Omar B.', role: 'Entrepreneur', content: 'Une expérience d\'achat exceptionnelle. La qualité de la montre est bluffante, identique aux photos.', avatar: 'https://i.pravatar.cc/150?u=omar' },
  { id: 't2', name: 'Yasmine K.', role: 'Fashion Blogger', content: 'Taha2Luxe est ma référence pour les accessoires. Le service de livraison est rapide et très pro.', avatar: 'https://i.pravatar.cc/150?u=yasmine' },
  { id: 't3', name: 'Hamza S.', role: 'Collectionneur', content: 'Le meilleur rapport qualité-prix au Maroc. Je recommande vivement pour les amateurs de luxe.', avatar: 'https://i.pravatar.cc/150?u=hamza' },
];
