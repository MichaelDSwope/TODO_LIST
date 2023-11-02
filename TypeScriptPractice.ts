// TALLEST MOUNTAIN
interface Mountain {
    name: string;
    height: number;
  }
  
  const mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
  ];
  
  function findNameOfTallestMountain(mountainArray: Mountain[]): string {
    let tallestMountain: Mountain | null = null;
    for (const mountain of mountainArray) {
      if (!tallestMountain || mountain.height > tallestMountain.height) {
        tallestMountain = mountain;
      }
    }
    return tallestMountain ? tallestMountain.name : "";
  }
  
  const tallestMountainName = findNameOfTallestMountain(mountains);
  console.log("Tallest Mountain:", tallestMountainName);
  
  // PRODUCTS
  interface Product {
    name: string;
    price: number;
  }
  
  const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 },
  ];
  
  function calcAverageProductPrice(productArray: Product[]): number {
    if (productArray.length === 0) {
      return 0;
    }
    const totalPrices = productArray.reduce((acc, product) => acc + product.price, 0);
    return totalPrices / productArray.length;
  }
  
  const averageProductPrice = calcAverageProductPrice(products);
  console.log("Average Product Price:", averageProductPrice);
  
  // INVENTORY
  interface InventoryItem {
    product: Product;
    quantity: number;
  }
  
  const inventory: InventoryItem[] = [
    { product: { name: "Motor", price: 10.0 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 },
  ];
  
  function calcInventoryValue(inventoryArray: InventoryItem[]): number {
    if (inventoryArray.length === 0) {
      return 0;
    }
    const totalValue = inventoryArray.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    return totalValue;
  }
  
  const inventoryValue = calcInventoryValue(inventory);
  console.log("Inventory Value:", inventoryValue);
  