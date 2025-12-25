export interface OptionItem {
    name: string;
    price?: number;
    description?: string;
    category?: 'tradicionais' | 'especiais' | 'doces' | 'bebidas' | 'adicionais';
    count?: number; // Logic for counter items if needed
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
    { name: 'Catupiry Original', price: 8.00 },
    { name: 'Cheddar Cremoso', price: 6.00 },
    { name: 'Chocolate', price: 8.00 },
    { name: 'Requeijão', price: 5.00 }
];

const sabores: OptionItem[] = [
    // Tradicionais
    { name: 'Mussarela', category: 'tradicionais', description: 'Mussarela, tomate e orégano' },
    { name: 'Calabresa', category: 'tradicionais', description: 'Calabresa fatiada e cebola' },
    { name: 'Marguerita', category: 'tradicionais', description: 'Mussarela, tomate e manjericão' },
    { name: 'Portuguesa', category: 'tradicionais', description: 'Mussarela, presunto, ovo, cebola e ervilha' },
    { name: 'Frango com Catupiry', category: 'tradicionais', description: 'Frango desfiado e catupiry' },
    { name: 'Napolitana', category: 'tradicionais', description: 'Mussarela, presunto, tomate e cebola' },
    { name: 'Bacon', category: 'tradicionais', description: 'Mussarela e bacon crocante' },

    // Especiais
    { name: 'Carne Seca com Catupiry', category: 'especiais', description: 'Carne seca desfiada, catupiry e cebola', price: 5.00 },
    { name: 'Camarão', category: 'especiais', description: 'Camarão refogado e mussarela', price: 12.00 },
    { name: 'Filé Mignon com Cheddar', category: 'especiais', description: 'Tiras de filé e cheddar', price: 10.00 },
    { name: 'Quatro Queijos', category: 'especiais', description: 'Mussarela, provolone, parmesão e catupiry', price: 4.00 },
    { name: 'Peperoni', category: 'especiais', description: 'Mussarela e peperoni', price: 6.00 },

    // Doces
    { name: 'Chocolate ao Leite', category: 'doces', description: 'Chocolate e granulado' },
    { name: 'Prestígio', category: 'doces', description: 'Chocolate e coco ralado' },
    { name: 'Banana com Canela', category: 'doces', description: 'Mussarela, banana, açúcar e canela' },
    { name: 'Romeu e Julieta', category: 'doces', description: 'Mussarela e goiabada' },
    { name: 'Chocolate Branco com Morango', category: 'doces', description: 'Chocolate branco e pedaços de morango', price: 5.00 }
];

const bebidasUpsell: OptionItem[] = [
    { name: 'Coca Cola 2L', count: 0, price: 15.00, category: 'bebidas' },
    { name: 'Guaraná 2L', price: 12.00, category: 'bebidas' },
    { name: 'Coca Cola 600ml', price: 9.00, category: 'bebidas' },
    { name: 'Coca Cola Lata', price: 6.00, category: 'bebidas' }
];

// --- GROUPS ---
// Explicitly typing them ensures 'type' property is validated against the union type

const groupBorda: OptionGroup = { title: 'Escolha a Borda', items: bordas, type: 'radio', required: true, min: 1, max: 1 };
const groupSaboresBroto: OptionGroup = { title: 'Escolha 1 Sabor', items: sabores, type: 'radio', required: true, min: 1, max: 1 };
const groupSaboresMedia: OptionGroup = { title: 'Escolha até 2 Sabores', items: sabores, type: 'checkbox', required: true, min: 1, max: 2 };
const groupSaboresGrande: OptionGroup = { title: 'Escolha até 3 Sabores', items: sabores, type: 'checkbox', required: true, min: 1, max: 3 };
const groupSaboresGigante: OptionGroup = { title: 'Escolha até 3 Sabores', items: sabores, type: 'checkbox', required: true, min: 1, max: 3 };
const groupSaboresFamilia: OptionGroup = { title: 'Escolha até 4 Sabores', items: sabores, type: 'checkbox', required: true, min: 1, max: 4 };

const groupBebidas: OptionGroup = { title: 'Compre Junto (Bebidas Geladinhas)', items: bebidasUpsell, type: 'checkbox', required: false, min: 0, max: 5 };

// --- MAPPING ---

export const productOptions: ProductOptionsMap = {
    // Pizzas
    'pizza-broto': [groupBorda, groupSaboresBroto, groupBebidas],
    'pizza-30cm': [groupBorda, groupSaboresMedia, groupBebidas],
    'pizza-35cm': [groupBorda, groupSaboresMedia, groupBebidas],
    'pizza-40cm': [groupBorda, groupSaboresGrande, groupBebidas],
    'pizza-45cm': [groupBorda, groupSaboresGigante, groupBebidas],
    'pizza-50cm': [groupBorda, groupSaboresFamilia, groupBebidas],

    // Combos
    'combo-pizza-vip-gigante-sobremesa': [
        { title: 'Sabores da Pizza (Até 3)', items: sabores, type: 'checkbox', required: true, min: 1, max: 3 } as OptionGroup,
        { title: 'Escolha os Açaís', items: [{ name: 'Tradicional', price: 0 }], type: 'checkbox', required: true, min: 1, max: 1 } as OptionGroup
    ],

    // Burgers with specific options
    'x-salada': [
        { title: 'Adicionais', items: [{ name: 'Bacon', price: 4.00 }, { name: 'Ovo', price: 2.00 }], type: 'checkbox', min: 0, max: 5 } as OptionGroup,
        groupBebidas
    ],
};
