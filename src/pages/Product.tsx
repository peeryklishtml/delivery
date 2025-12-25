export interface OptionItem {
    name: string;
    price?: number;
    description?: string;
    category?: 'tradicionais' | 'especiais' | 'premium' | 'light' | 'doces' | 'bebidas' | 'adicionais' | 'pastel' | 'pao' | 'ponto' | 'molho' | 'geral';
    count?: number;
}

export interface OptionGroup {
    title: string;
    type?: 'checkbox' | 'radio';
    required?: boolean;
    min?: number;
    max?: number;
    items: OptionItem[];
}

export interface ProductOptionsMap {
    [productId: string]: OptionGroup[];
}

// --- OPTION LISTS ---

const bordas: OptionItem[] = [
    { name: 'Sem Borda', price: 0.00 },
    { name: 'Tradicional - Catupiry', price: 8.00 },
    { name: 'Tradicional - Cheddar', price: 8.00 },
    { name: 'Tradicional - Requeijão', price: 6.00 },
    { name: 'Especial - Chocolate Preto', price: 10.00 },
    { name: 'Especial - Chocolate Branco', price: 10.00 },
    { name: 'Especial - Goiabada', price: 8.00 },
    { name: 'Especial - Doce de Leite', price: 8.00 },
    { name: 'Especial - Nutella', price: 15.00 },
    { name: 'Premium - Vulcão Catupiry', price: 15.00 },
    { name: 'Premium - Vulcão Cheddar', price: 15.00 },
    { name: 'Premium - Pãozinho de Calabresa', price: 12.00 },
    { name: 'Premium - Pãozinho de Frango', price: 12.00 }
];

const saboresPizza: OptionItem[] = [
    // --- TRADICIONAIS ---
    { name: 'Mussarela', category: 'tradicionais', description: 'Mussarela, tomate e orégano' },
    { name: 'Calabresa', category: 'tradicionais', description: 'Calabresa fatiada e cebola' },
    { name: 'Marguerita', category: 'tradicionais', description: 'Mussarela, tomate e manjericão fresco' },
    { name: 'Portuguesa', category: 'tradicionais', description: 'Mussarela, presunto, ovo, cebola e ervilha' },
    { name: 'Frango com Catupiry', category: 'tradicionais', description: 'Frango desfiado e catupiry original' },
    { name: 'Napolitana', category: 'tradicionais', description: 'Mussarela, presunto, tomate e cebola' },
    { name: 'Bacon', category: 'tradicionais', description: 'Mussarela e bacon crocante' },
    { name: 'Milho', category: 'tradicionais', description: 'Mussarela e milho verde' },
    { name: 'Baiana', category: 'tradicionais', description: 'Calabresa moída, pimenta, cebola e mussarela' },
    { name: 'Atum', category: 'tradicionais', description: 'Atum sólido e cebola' },
    { name: 'Brócolis', category: 'tradicionais', description: 'Brócolis, bacon e mussarela' },
    { name: 'Alho e Óleo', category: 'tradicionais', description: 'Mussarela e alho frito' },
    { name: 'Lombo', category: 'tradicionais', description: 'Lombo canadense e cebola' },
    { name: 'Dois Queijos', category: 'tradicionais', description: 'Mussarela e catupiry' },
    { name: 'Escarola', category: 'tradicionais', description: 'Escarola refogada, bacon e mussarela' },
    { name: 'Humita', category: 'tradicionais', description: 'Mussarela, milho e catupiry' },
    { name: 'Veneza', category: 'tradicionais', description: 'Mussarela, presunto e azeitona' },

    // --- ESPECIAIS ---
    { name: 'Carne Seca com Catupiry', category: 'especiais', description: 'Carne seca desfiada, catupiry e cebola', price: 5.00 },
    { name: 'Quatro Queijos', category: 'especiais', description: 'Mussarela, provolone, parmesão e catupiry', price: 5.00 },
    { name: 'Cinco Queijos', category: 'especiais', description: 'Mussarela, provolone, parmesão, catupiry e gorgonzola', price: 7.00 },
    { name: 'Peperoni', category: 'especiais', description: 'Mussarela e peperoni fatiado', price: 6.00 },
    { name: 'Strogonoff de Carne', category: 'especiais', description: 'Strogonoff de carne com batata palha', price: 8.00 },
    { name: 'Strogonoff de Frango', category: 'especiais', description: 'Strogonoff de frango com batata palha', price: 7.00 },
    { name: 'Palmito', category: 'especiais', description: 'Palmito e mussarela', price: 6.00 },
    { name: 'Rúcula com Tomate Seco', category: 'especiais', description: 'Mussarela, rúcula fresca e tomate seco', price: 7.00 },
    { name: 'Moda da Casa', category: 'especiais', description: 'Frango, bacon, milho, palmito, mussarela e catupiry', price: 8.00 },
    { name: 'Vegetariana', category: 'especiais', description: 'Brócolis, palmito, milho, ervilha, tomate e mussarela', price: 6.00 },
    { name: 'Siciliana', category: 'especiais', description: 'Mussarela, bacon, champignon e catupiry', price: 7.00 },
    { name: 'Canadense', category: 'especiais', description: 'Lombo, catupiry e champignon', price: 7.00 },
    { name: 'Mexicana', category: 'especiais', description: 'Calabresa, pimenta, pimentão, cebola e cheddar', price: 6.00 },
    { name: 'Nordestina', category: 'especiais', description: 'Carne seca, cebola roxa, pimenta biquinho e catupiry', price: 8.00 },

    // --- PREMIUM ---
    { name: 'Camarão', category: 'premium', description: 'Camarão refogado e mussarela', price: 15.00 },
    { name: 'Camarão com Catupiry', category: 'premium', description: 'Camarão refogado e catupiry original', price: 18.00 },
    { name: 'Filé Mignon com Cheddar', category: 'premium', description: 'Tiras de filé e cheddar cremoso', price: 12.00 },
    { name: 'Filé Mignon ao Alho', category: 'premium', description: 'Tiras de filé, alho frito e mussarela', price: 12.00 },
    { name: 'Picanha', category: 'premium', description: 'Tiras de picanha, cebola e mussarela', price: 14.00 },
    { name: 'Brie com Damasco', category: 'premium', description: 'Queijo brie e geleia de damasco', price: 16.00 },
    { name: 'Parma com Rúcula', category: 'premium', description: 'Presunto parma, rúcula e parmesão', price: 18.00 },
    { name: 'Salmão com Cream Cheese', category: 'premium', description: 'Salmão defumado e cream cheese', price: 20.00 },

    // --- DOCES ---
    { name: 'Chocolate ao Leite', category: 'doces', description: 'Chocolate e granulado' },
    { name: 'Prestígio', category: 'doces', description: 'Chocolate e coco ralado' },
    { name: 'Banana com Canela', category: 'doces', description: 'Mussarela, banana, açúcar e canela' },
    { name: 'Romeu e Julieta', category: 'doces', description: 'Mussarela e goiabada' },
    { name: 'Chocolate Branco com Morango', category: 'doces', description: 'Chocolate branco e pedaços de morango', price: 6.00 },
    { name: 'Confete', category: 'doces', description: 'Chocolate ao leite com confetes coloridos' },
    { name: 'Sensação', category: 'doces', description: 'Chocolate ao leite e morango', price: 6.00 },
    { name: 'Ovomaltine', category: 'doces', description: 'Chocolate ao leite e flocos crocantes', price: 6.00 },
    { name: 'Doce de Leite', category: 'doces', description: 'Doce de leite cremoso', price: 4.00 },
    { name: 'Churros', category: 'doces', description: 'Doce de leite, açúcar e canela', price: 5.00 },
    { name: 'Kit Kat', category: 'doces', description: 'Chocolate ao leite e pedaços de Kit Kat', price: 7.00 },
    { name: 'Nutella com Morango', category: 'doces', description: 'Nutella original e morangos frescos', price: 10.00 }
];

const saboresPastel: OptionItem[] = [
    { name: 'Carne', category: 'pastel' },
    { name: 'Queijo', category: 'pastel' },
    { name: 'Frango', category: 'pastel' },
    { name: 'Pizza', category: 'pastel' },
    { name: 'Calabresa', category: 'pastel' },
    { name: 'Bauru', category: 'pastel' },
    { name: 'Carne com Queijo', category: 'pastel' },
    { name: 'Frango com Catupiry', category: 'pastel' },
    { name: 'Palmito', category: 'pastel' },
    { name: 'Carne com Ovo', category: 'pastel' },
    { name: 'Frango com Bacon', category: 'pastel' },
    { name: 'Quatro Queijos', category: 'pastel' },
    { name: 'Chocolate', category: 'pastel' },
    { name: 'Banana com Canela', category: 'pastel' }
];

const adicionaisLanche: OptionItem[] = [
    { name: 'Bacon Extra', price: 4.00, category: 'adicionais' },
    { name: 'Ovo Extra', price: 2.00, category: 'adicionais' },
    { name: 'Hambúrguer Extra', price: 8.00, category: 'adicionais' },
    { name: 'Cheddar', price: 3.50, category: 'adicionais' },
    { name: 'Catupiry', price: 3.50, category: 'adicionais' },
    { name: 'Maionese Temperada', price: 2.00, category: 'adicionais' },
    { name: 'Cebola Caramelizada', price: 3.00, category: 'adicionais' },
    { name: 'Molho Barbecue', price: 2.00, category: 'adicionais' },
    { name: 'Salada Extra', price: 2.00, category: 'adicionais' },
    { name: 'Picles', price: 2.00, category: 'adicionais' },
    { name: 'Calabresa Fatiada', price: 3.00, category: 'adicionais' },
    { name: 'Cebola Roxa', price: 1.00, category: 'adicionais' }
];

const tiposPao: OptionItem[] = [
    { name: 'Pão Tradicional', category: 'pao', price: 0 },
    { name: 'Pão Brioche', category: 'pao', price: 2.00 },
    { name: 'Pão Australiano', category: 'pao', price: 3.00 },
    { name: 'Pão com Gergelim', category: 'pao', price: 0 }
];

const pontoCarne: OptionItem[] = [
    { name: 'Mal Passado', category: 'ponto' },
    { name: 'Ao Ponto', category: 'ponto' },
    { name: 'Bem Passado', category: 'ponto' }
];

const molhos: OptionItem[] = [
    { name: 'Maionese Verde da Casa', price: 3.00, category: 'molho' },
    { name: 'Maionese de Alho', price: 3.00, category: 'molho' },
    { name: 'Barbecue', price: 3.00, category: 'molho' },
    { name: 'Ketchup Premium', price: 0.00, category: 'molho' },
    { name: 'Mostarda e Mel', price: 3.00, category: 'molho' },
    { name: 'Pimenta da Casa', price: 2.00, category: 'molho' }
];


const bebidasUpsell: OptionItem[] = [
    { name: 'Coca Cola 2L', price: 15.00, category: 'bebidas' },
    { name: 'Guaraná 2L', price: 12.00, category: 'bebidas' },
    { name: 'Coca Cola 600ml', price: 9.00, category: 'bebidas' },
    { name: 'Coca Cola Lata', price: 6.00, category: 'bebidas' },
    { name: 'Suco Del Valle Uva', price: 8.00, category: 'bebidas' },
    { name: 'Suco Del Valle Pêssego', price: 8.00, category: 'bebidas' },
    { name: 'Água com Gás', price: 3.00, category: 'bebidas' },
    { name: 'Água sem Gás', price: 3.00, category: 'bebidas' },
    { name: 'H2OH! Limão', price: 7.00, category: 'bebidas' },
    { name: 'Schweppes Citrus', price: 7.00, category: 'bebidas' }
];

const opcoesBebida: OptionItem[] = [
    { name: 'Gelar Bem', category: 'geral' },
    { name: 'Sem Gelo', category: 'geral' },
    { name: 'Com Limão', category: 'geral' },
    { name: 'Com Copo Descartável', category: 'geral' }
];

// --- GROUPS ---

// Pizza Groups
const groupBorda: OptionGroup = { title: 'Escolha a Borda', items: bordas, type: 'radio', required: true, min: 1, max: 1 };
const groupSaboresBroto: OptionGroup = { title: 'Escolha 1 Sabor (Broto)', items: saboresPizza, type: 'radio', required: true, min: 1, max: 1 };
const groupSaboresMedia: OptionGroup = { title: 'Escolha até 2 Sabores', items: saboresPizza, type: 'checkbox', required: true, min: 1, max: 2 };
const groupSaboresGrande: OptionGroup = { title: 'Escolha até 3 Sabores', items: saboresPizza, type: 'checkbox', required: true, min: 1, max: 3 };
const groupSaboresGigante: OptionGroup = { title: 'Escolha até 3 Sabores (Gigante)', items: saboresPizza, type: 'checkbox', required: true, min: 1, max: 3 };
const groupSaboresFamilia: OptionGroup = { title: 'Escolha até 4 Sabores (Família)', items: saboresPizza, type: 'checkbox', required: true, min: 1, max: 4 };

// Combo Groups
const groupEscolhaPastel1: OptionGroup = { title: 'Escolha o 1º Pastel', items: saboresPastel, type: 'radio', required: true, min: 1, max: 1 };
const groupEscolhaPastel2: OptionGroup = { title: 'Escolha o 2º Pastel', items: saboresPastel, type: 'radio', required: true, min: 1, max: 1 };

// Lanche Groups
const groupPao: OptionGroup = { title: 'Escolha o Pão', items: tiposPao, type: 'radio', required: true, min: 1, max: 1 };
const groupPonto: OptionGroup = { title: 'Ponto da Carne', items: pontoCarne, type: 'radio', required: true, min: 1, max: 1 };
const groupAdicionais: OptionGroup = { title: 'Turbine seu Lanche', items: adicionaisLanche, type: 'checkbox', required: false, min: 0, max: 5 };
const groupMolhos: OptionGroup = { title: 'Molhos Especiais', items: molhos, type: 'checkbox', required: false, min: 0, max: 3 };

// Common
const groupBebidas: OptionGroup = { title: 'Compre Junto (Bebidas Geladinhas)', items: bebidasUpsell, type: 'checkbox', required: false, min: 0, max: 5 };

// Bebidas Options (User requested ALL items have options)
const groupBebidaObs: OptionGroup = { title: 'Observações da Bebida', items: opcoesBebida, type: 'checkbox', required: false, min: 0, max: 4 };


// --- MAPPING ---

export const productOptions: ProductOptionsMap = {
    // --- PIZZAS INDIVIDUAIS ---
    'pizza-broto': [groupBorda, groupSaboresBroto, groupBebidas],
    'pizza-30cm': [groupBorda, groupSaboresMedia, groupBebidas],
    'pizza-35cm': [groupBorda, groupSaboresMedia, groupBebidas],
    'pizza-40cm': [groupBorda, groupSaboresGrande, groupBebidas],
    'pizza-45cm': [groupBorda, groupSaboresGigante, groupBebidas],
    'pizza-50cm': [groupBorda, groupSaboresFamilia, groupBebidas],

    // --- PROMOÇÕES GIGANTES (Combos de Pizza) ---
    'combo-pizza-vip-gigante-sobremesa': [groupBorda, groupSaboresGigante, groupBebidas],
    'promo-broto-gigante': [groupBorda, groupSaboresBroto, groupSaboresGigante, groupBebidas],
    'combo-vip-pizza-acai': [groupBorda, groupSaboresMedia, groupBebidas],
    'pizza-gigante-coca': [groupBorda, groupSaboresGigante, groupBebidas],
    'pizza-gigante-kuat': [groupBorda, groupSaboresGigante, groupBebidas],
    'promo-pizza-gigante-45cm-kuat': [groupBorda, groupSaboresGigante, groupBebidas],

    'pizza-grande-kuat': [groupBorda, groupSaboresGrande, groupBebidas],
    'promo-pizza-grande-kuat-2l': [groupBorda, groupSaboresGrande, groupBebidas],

    'promo-familia-borda-coca': [groupBorda, groupSaboresFamilia, groupBebidas],
    'pizza-familia-borda-kuat': [groupBorda, groupSaboresFamilia, groupBebidas],

    // --- COMBOS & DIA DO PASTEL ---
    'combo-casal-vip': [groupEscolhaPastel1, groupEscolhaPastel2, groupBebidas],
    'combo-casal-vip-b': [groupEscolhaPastel1, groupEscolhaPastel2, groupBebidas],
    'combo-vip-pastel': [groupEscolhaPastel1, groupBebidas],

    'combo-10-xsimples': [groupMolhos, groupBebidas],

    // --- LANCHES ---
    'terca-vip-gourmet': [groupPao, groupPonto, groupAdicionais, groupMolhos, groupBebidas],
    'gourmet-kids': [groupPao, groupPonto, groupAdicionais, groupMolhos, groupBebidas],
    'gourmet-da-casa': [groupPao, groupPonto, groupAdicionais, groupMolhos, groupBebidas],
    'gourmet-vip': [groupPao, groupPonto, groupAdicionais, groupMolhos, groupBebidas],
    'gourmet-garrote': [groupPao, groupPonto, groupAdicionais, groupMolhos, groupBebidas],
    'gourmet-cheese': [groupPao, groupPonto, groupAdicionais, groupMolhos, groupBebidas],

    'x-burguer': [groupAdicionais, groupMolhos, groupBebidas],
    'x-simples': [groupAdicionais, groupMolhos, groupBebidas],
    'x-salada': [groupAdicionais, groupMolhos, groupBebidas],
    'x-bacon': [groupAdicionais, groupMolhos, groupBebidas],
    'x-coracao': [groupAdicionais, groupMolhos, groupBebidas],
    'x-calabresa': [groupAdicionais, groupMolhos, groupBebidas],
    'x-egg': [groupAdicionais, groupMolhos, groupBebidas],
    'x-frango': [groupAdicionais, groupMolhos, groupBebidas],
    'x-vip': [groupAdicionais, groupMolhos, groupBebidas],

    // --- PASTEIS ---
    'pastel-queijo': [groupMolhos, groupBebidas],
    'pastel-carne': [groupMolhos, groupBebidas],
    'pastel-frango': [groupMolhos, groupBebidas],
    'pastel-carne-ovos': [groupMolhos, groupBebidas],
    'pastel-pizza': [groupMolhos, groupBebidas],
    'pastel-frango-queijo': [groupMolhos, groupBebidas],
    'pastel-carne-queijo': [groupMolhos, groupBebidas],
    'pastel-vegetariano': [groupMolhos, groupBebidas],

    'pastel-carne-vip': [groupMolhos, groupBebidas],
    'pastel-frango-vip': [groupMolhos, groupBebidas],
    'pastel-frango-catupiry-vip': [groupMolhos, groupBebidas],
    'pastel-carne-catupiry-vip': [groupMolhos, groupBebidas],
    'pastel-bacon-vip': [groupMolhos, groupBebidas],
    'pastel-palmito-vip': [groupMolhos, groupBebidas],
    'pastel-vip-completo': [groupMolhos, groupBebidas],
    'pastel-carne-seca-vip': [groupMolhos, groupBebidas],

    'pastel-sensacao': [groupBebidas],
    'pastel-tentacao': [groupBebidas],
    'pastel-dois-amores': [groupBebidas],
    'pastel-banana-nevada': [groupBebidas],

    // --- BEBIDAS ---
    'coca-2l': [groupBebidaObs],
    'kuat-2l': [groupBebidaObs],
    'coca-600': [groupBebidaObs],
    'fanta-lata': [groupBebidaObs],
    'coca-lata': [groupBebidaObs],
    'guarana-lata': [groupBebidaObs],
    'coca-200': [groupBebidaObs],
    'agua-gas': [groupBebidaObs],
};
