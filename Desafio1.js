class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts() {
    return this.products;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.some((product) => product.code === code)) {
      throw new Error("El producto ya existe.");
    }
    const newProduct = {
      id: this.generateUniqueId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("No encontrado");
    }
    return product;
  }

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

try {
  const newProduct = productManager.addProduct(
    "Remera Huoky",
    "Talle S a XL",
    5000,
    "Imagen",
    "512",
    25
  );
  console.log("Producto agregado:", newProduct);
} catch (error) {
  console.error("Error al agregar:");
}

console.log(productManager.getProducts());

try {
  const productFound = productManager.getProductById(
    productManager.getProducts()[0].id
  );
  console.log("Producto encontrado:", productFound);
} catch (error) {
  console.error("Error al buscar producto por ID");
}
