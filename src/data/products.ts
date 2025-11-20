export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'entremets',
    name: 'Entremets',
    image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'tartes',
    name: 'Tartes',
    image: 'https://images.unsplash.com/photo-1727290894317-e1cd142a5043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB0YXJ0ZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzNTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'choux',
    name: 'Choux & Éclairs',
    image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'macarons',
    name: 'Macarons',
    image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'gateaux',
    name: 'Gâteaux Individuels',
    image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'mini',
    name: 'Mini Pâtisserie',
    image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'viennoiseries',
    name: 'Viennoiseries',
    image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'cakes',
    name: 'Cakes & Pound Cakes',
    image: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMHRhcnR8ZW58MXx8fHwxNzYzNTgwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'biscuits',
    name: 'Biscuits / Cookies',
    image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'boissons-chaudes',
    name: 'Boissons Chaudes',
    image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'boissons-froides',
    name: 'Boissons Froides',
    image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export const products: Product[] = [
  // Entremets
  { id: 'e1', name: 'Entremet Framboisier', price: 6.50, category: 'entremets', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e2', name: 'Entremet Chocolat Noir Praliné', price: 6.80, category: 'entremets', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e3', name: 'Entremet Pistache Fruits Rouges', price: 6.90, category: 'entremets', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e4', name: 'Entremet Mangue Passion', price: 6.50, category: 'entremets', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e5', name: 'Entremet Vanille Bourbon', price: 6.20, category: 'entremets', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e6', name: 'Entremet Caramel Beurre Salé', price: 6.70, category: 'entremets', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e7', name: 'Royal Chocolat', price: 7.20, category: 'entremets', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e8', name: 'Fraisier Signature', price: 6.90, category: 'entremets', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e9', name: 'CheeseCake Framboise', price: 6.50, category: 'entremets', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'e10', name: 'Bavarois Fruits Exotiques', price: 6.40, category: 'entremets', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },

  // Tartes
  { id: 't1', name: 'Tarte Citron Meringuée', price: 5.90, category: 'tartes', image: 'https://images.unsplash.com/photo-1648412009969-de91a17f4340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnQlMjBtZXJpbmd1ZXxlbnwxfHx8fDE3NjM1ODA5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't2', name: 'Tarte Fraise', price: 5.80, category: 'tartes', image: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMHRhcnR8ZW58MXx8fHwxNzYzNTgwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't3', name: 'Tarte Pistache', price: 6.20, category: 'tartes', image: 'https://images.unsplash.com/photo-1727290894317-e1cd142a5043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB0YXJ0ZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzNTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't4', name: 'Tarte Chocolat', price: 5.90, category: 'tartes', image: 'https://images.unsplash.com/photo-1727290894317-e1cd142a5043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB0YXJ0ZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzNTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't5', name: 'Tarte Caramel', price: 5.80, category: 'tartes', image: 'https://images.unsplash.com/photo-1727290894317-e1cd142a5043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB0YXJ0ZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzNTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't6', name: 'Tarte Fruits Rouges', price: 6.10, category: 'tartes', image: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMHRhcnR8ZW58MXx8fHwxNzYzNTgwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't7', name: 'Tarte Pomme', price: 5.50, category: 'tartes', image: 'https://images.unsplash.com/photo-1727290894317-e1cd142a5043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB0YXJ0ZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzNTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't8', name: 'Tarte Poire Amandine', price: 5.70, category: 'tartes', image: 'https://images.unsplash.com/photo-1727290894317-e1cd142a5043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjB0YXJ0ZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzNTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't9', name: 'Tarte Framboise', price: 6.00, category: 'tartes', image: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMHRhcnR8ZW58MXx8fHwxNzYzNTgwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 't10', name: 'Tarte Citron', price: 5.60, category: 'tartes', image: 'https://images.unsplash.com/photo-1648412009969-de91a17f4340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnQlMjBtZXJpbmd1ZXxlbnwxfHx8fDE3NjM1ODA5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Choux & Éclairs
  { id: 'c1', name: 'Éclair Vanille', price: 4.50, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c2', name: 'Éclair Chocolat', price: 4.50, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c3', name: 'Éclair Café', price: 4.50, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c4', name: 'Religieuse Chocolat', price: 4.80, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c5', name: 'Paris-Brest', price: 5.20, category: 'choux', image: 'https://images.unsplash.com/photo-1761637604739-790197a32073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGJyZXN0JTIwY2hvdXh8ZW58MXx8fHwxNzYzNTgwOTkzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c6', name: 'Chouquette (x6)', price: 3.50, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c7', name: 'Éclair Framboise', price: 4.70, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c8', name: 'Éclair Pistache', price: 4.90, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c9', name: 'Religieuse Vanille', price: 4.80, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'c10', name: 'Éclair Caramel', price: 4.60, category: 'choux', image: 'https://images.unsplash.com/photo-1673192758787-455f44c9e1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXIlMjBwYXN0cnl8ZW58MXx8fHwxNzYzNTgwOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Macarons
  { id: 'm1', name: 'Macaron Pistache', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm2', name: 'Macaron Framboise', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm3', name: 'Macaron Caramel', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm4', name: 'Macaron Chocolat', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm5', name: 'Macaron Vanille', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm6', name: 'Macaron Citron', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm7', name: 'Macaron Café', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm8', name: "Macaron Fleur d'Oranger", price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm9', name: 'Macaron Pamplemousse', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'm10', name: 'Macaron Noisette', price: 2.20, category: 'macarons', image: 'https://images.unsplash.com/photo-1709224880492-604a7b15c11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZyZW5jaCUyMG1hY2Fyb25zfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },

  // Gâteaux Individuels
  { id: 'g1', name: 'Opéra', price: 5.80, category: 'gateaux', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g2', name: 'Fondant Chocolat', price: 5.50, category: 'gateaux', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g3', name: 'Tiramisu', price: 5.20, category: 'gateaux', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g4', name: 'Mille-Feuille', price: 5.60, category: 'gateaux', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g5', name: 'Pavlova Fruits Rouges', price: 5.90, category: 'gateaux', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g6', name: 'Mont Blanc', price: 6.20, category: 'gateaux', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g7', name: 'Crème Brûlée', price: 4.80, category: 'gateaux', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g8', name: 'Panna Cotta', price: 4.50, category: 'gateaux', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g9', name: 'Forêt Noire', price: 5.90, category: 'gateaux', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'g10', name: 'Baba au Rhum', price: 5.30, category: 'gateaux', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },

  // Mini Pâtisserie
  { id: 'mi1', name: 'Mini Tarte Citron', price: 3.50, category: 'mini', image: 'https://images.unsplash.com/photo-1648412009969-de91a17f4340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnQlMjBtZXJpbmd1ZXxlbnwxfHx8fDE3NjM1ODA5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi2', name: 'Mini Fraisier', price: 3.80, category: 'mini', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi3', name: 'Mini Opéra', price: 3.50, category: 'mini', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi4', name: 'Mini Mille-Feuille', price: 3.40, category: 'mini', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi5', name: 'Mini Chocolat', price: 3.60, category: 'mini', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi6', name: 'Mini Cheesecake', price: 3.70, category: 'mini', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi7', name: 'Mini Tarte Framboise', price: 3.60, category: 'mini', image: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMHRhcnR8ZW58MXx8fHwxNzYzNTgwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi8', name: 'Mini Mousse Chocolat', price: 3.40, category: 'mini', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi9', name: 'Mini Pavlova', price: 3.50, category: 'mini', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'mi10', name: 'Mini Caramel', price: 3.30, category: 'mini', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },

  // Viennoiseries
  { id: 'v1', name: 'Croissant Pur Beurre', price: 1.50, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v2', name: 'Pain au Chocolat', price: 1.60, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v3', name: 'Pain aux Raisins', price: 1.70, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v4', name: 'Brioche Feuilletée', price: 1.80, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v5', name: 'Chausson aux Pommes', price: 1.90, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v6', name: 'Croissant Amandes', price: 2.20, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v7', name: 'Palmier', price: 1.40, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v8', name: 'Brioche Tressée', price: 2.00, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v9', name: 'Escargot Chocolat', price: 1.80, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'v10', name: 'Kouign-Amann', price: 2.50, category: 'viennoiseries', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Cakes & Pound Cakes
  { id: 'ca1', name: 'Cake Citron', price: 4.50, category: 'cakes', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca2', name: 'Cake Chocolat Noix', price: 4.80, category: 'cakes', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca3', name: 'Pound Cake Vanille', price: 4.20, category: 'cakes', image: 'https://images.unsplash.com/photo-1592382419665-40ded771c471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMHRhcnR8ZW58MXx8fHwxNzYzNTgwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca4', name: 'Cake Pistache', price: 4.90, category: 'cakes', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca5', name: 'Cake Framboise', price: 4.60, category: 'cakes', image: 'https://images.unsplash.com/photo-1541779680529-138e9bf8d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBlbnRyZW1ldCUyMGNha2V8ZW58MXx8fHwxNzYzNTgwOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca6', name: 'Cake Myrtille', price: 4.70, category: 'cakes', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca7', name: 'Pound Cake Marbre', price: 4.30, category: 'cakes', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca8', name: 'Cake Orange Pavot', price: 4.50, category: 'cakes', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca9', name: 'Cake Noix Miel', price: 4.80, category: 'cakes', image: 'https://images.unsplash.com/photo-1608538242850-dad61fa8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZW50cmVtZXQlMjBjYWtlfGVufDF8fHx8MTc2MzU4MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'ca10', name: 'Cake Banane Chocolat', price: 4.60, category: 'cakes', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM0OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Biscuits / Cookies
  { id: 'b1', name: 'Cookie Chocolat', price: 2.80, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b2', name: 'Cookie Noix Pécan', price: 2.90, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b3', name: 'Sablé Vanille', price: 2.50, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b4', name: 'Financier (x3)', price: 3.60, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b5', name: 'Madeleine (x4)', price: 3.20, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b6', name: 'Canelé (x2)', price: 4.20, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b7', name: 'Langue de Chat (x6)', price: 2.80, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b8', name: 'Biscuit Amandes', price: 2.60, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b9', name: 'Cookie Raisin Avoine', price: 2.70, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'b10', name: 'Sablé Noisettes', price: 2.60, category: 'biscuits', image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NjM1ODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Boissons Chaudes
  { id: 'bh1', name: 'Espresso', price: 2.50, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh2', name: 'Americano', price: 2.80, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh3', name: 'Cappuccino', price: 3.50, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh4', name: 'Latte', price: 3.80, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh5', name: 'Chocolat Chaud', price: 4.20, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh6', name: 'Thé Earl Grey', price: 3.20, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh7', name: 'Thé Vert Sencha', price: 3.20, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh8', name: 'Infusion Verveine', price: 2.90, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh9', name: 'Infusion Menthe', price: 2.90, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bh10', name: 'Café Viennois', price: 4.50, category: 'boissons-chaudes', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },

  // Boissons Froides
  { id: 'bf1', name: 'Jus Orange Pressé', price: 4.50, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf2', name: 'Jus Pomme', price: 3.80, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf3', name: 'Limonade Artisanale', price: 4.20, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf4', name: 'Milkshake Vanille', price: 5.50, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf5', name: 'Milkshake Chocolat', price: 5.50, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf6', name: 'Milkshake Fraise', price: 5.50, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf7', name: 'Thé Glacé Pêche', price: 3.80, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf8', name: 'Thé Glacé Citron', price: 3.80, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf9', name: 'Eau Minérale', price: 2.50, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'bf10', name: 'Eau Gazeuse', price: 2.80, category: 'boissons-froides', image: 'https://images.unsplash.com/photo-1547240089-0b75465f8e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwbGF0dGV8ZW58MXx8fHwxNzYzNTI5MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
];
