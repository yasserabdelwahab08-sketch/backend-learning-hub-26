//output is NaN because prices contains letters, shipping address does not exist, كان هيتقرف

type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";


function canCancelOrder(status: OrderStatus): boolean {
    if (status == "pending" || status == "shipped") {
        return true;
    } else {
        return false;
    }
}


interface Product {
    id: string;
    name: string;
    price: number;
    costPrice: number; // internal, never shown to customers
}

interface OrderItem {
    product: Product;
    qty: number;
}

interface Order {
    id: string;
    customer: string;
    items: OrderItem[];
    status: OrderStatus;        // reuse Part 2's type
    shippedAt?: string;         // optional — only exists once shipped
    readonly createdAt: string; // set once, never changes
}
let pro: Product = {
    id: "",
    name: "",
    price: 47,
    costPrice: 30
};
let ord: OrderItem = {
    product: pro, qty: 5
}
let or: Order = {
    id: "j",
    customer: "jk",
    items: [ord],
    status: "shipped",
    createdAt: "hdh"
}

interface Product {
    id: string;
    name: string;
    price: number;
    costPrice: number;
}

type PublicProduct = Omit<Product, "costPrice">;
type CreateProductInput = Omit<Product, "id">;
type UpdateProductInput = Partial<Product>;
type ProductCatalog = Record<string, Product>;





function toPublicProduct(product: Product): PublicProduct {
    const { costPrice, ...publicProduct } = product;
    return publicProduct;
}


function createProduct(input: CreateProductInput): Product {
    return {
        ...input,
        id: crypto.randomUUID(),
    }
}

function updateProduct(product: Product, changes: UpdateProductInput): Product {
    return {
        ...product,
        ...changes,
    };
}

const product1 = createProduct({ name: "Mechanical Keyboard", price: 120, costPrice: 70 });
const product2 = createProduct({ name: "Wireless Mouse", price: 80, costPrice: 45 });

const catalog: ProductCatalog = {
    [product1.id]: product1,
    [product2.id]: product2,
};

const lookupId = product1.id;
const retrievedProduct = catalog[lookupId];

// i would use centralized types


function receiveFromWarehouse(product: Product): void {
    console.log(product.name);
}
function getExternalWarehouseData() {
    return { id: "w-99", name: "Desk Lamp", price: 150, costPrice: 60, extra: "ignored" };
}
receiveFromWarehouse(getExternalWarehouseData());

//receiveFromWarehouse({ id: "w-1", name: "Chair", price: 90, costPrice: 40, extra: "oops" })
//error
type Result<T> =
    | { success: true; data: T }
    | { success: false; error: string };

function placeOrder(customer: string, items: OrderItem[]): Result<Order> {
    if (items.length == 0) {
        return { success: false, error: "Order must contain at least one item" }
    } else {
        let order: Order = or;
        return { success: true, data: order }
    }
}

