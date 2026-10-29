import { CategoryDef } from '../types/exercise';
import { doubleField, intField, lineField, wordField } from '../utils/fieldBuilders';

export const sariSariCategory: CategoryDef = {
  id: 'sari-sari',
  name: 'Sari-Sari Store Inventory',
  prefix: 'SSI',
  tagline: 'Product record for a neighborhood store',
  description: 'Record one product\u2019s details: prices, stock levels, supplier, and where it sits on the shelf.',
  programTitle: 'SARI-SARI STORE INVENTORY',
  highlights: ['Product name', 'Supplier', 'Restock quantity', 'Shelf number'],
  fields: [
  lineField('productName', 'productName', 'Product Name', ["Enter the product name:", "What is the name of the product?", "Type the full product name:"], 'e.g. Pancit Canton Chilimansi'),
  wordField('productCode', 'productCode', 'Product Code', ["Enter the product code:", "What is the item code of the product?"], 'One word, e.g. SKU-1042'),
  lineField('category', 'productCategory', 'Category', ["Enter the product category:", "Which category does the product belong to?"], 'e.g. Instant Noodles'),
  lineField('brand', 'brandName', 'Brand', ["Enter the brand name:", "What brand is the product?"], 'e.g. Golden Harvest'),
  wordField('size', 'productSize', 'Size', ["Enter the product size:", "What is the size of one item?"], 'One word, e.g. 355ml'),
  wordField('unitOfSale', 'unitOfSale', 'Unit of Sale', ["Enter the unit of sale (piece, pack, or sachet):", "How is the product sold to customers?"], 'One word, e.g. sachet'),
  doubleField('sellingPrice', 'sellingPrice', 'Selling Price (PHP)', ["Enter the selling price in pesos:", "How much is the selling price per item in pesos?"], 'e.g. 18.50', { min: 0 }),
  doubleField('wholesaleCost', 'wholesaleCost', 'Wholesale Cost (PHP)', ["Enter the wholesale cost per item in pesos:", "How much does the store pay the wholesaler per item?"], 'e.g. 14.25', { group: 'cost', min: 0 }),
  doubleField('unitCost', 'unitCost', 'Unit Cost (PHP)', ["Enter the unit cost in pesos:", "What is the cost of one unit from the supplier?"], 'e.g. 12.75', { group: 'cost', min: 0 }),
  intField('stockQty', 'stockQuantity', 'Quantity in Stock', ["Enter the quantity currently in stock:", "How many units are in stock right now?"], 'Whole number, e.g. 48', { min: 0 }),
  intField('reorderLevel', 'reorderLevel', 'Reorder Threshold', ["Enter the reorder threshold:", "At what stock level should the product be reordered?"], 'Whole number, e.g. 10', { min: 0 }),
  intField('minOrderQty', 'minOrderQuantity', 'Minimum Order Qty', ["Enter the minimum order quantity:", "What is the smallest quantity the supplier accepts per order?"], 'Whole number, e.g. 24', { min: 1 }),
  lineField('supplier', 'supplierName', 'Supplier', ["Enter the supplier name:", "Who supplies this product?"], 'e.g. Mabuhay Trading'),
  intField('unitsSold', 'unitsSold', 'Units Sold This Week', ["Enter the number of units sold this week:", "How many units were sold this week?"], 'Whole number, e.g. 36', { min: 0 }),
  intField('restockQty', 'restockQuantity', 'Restock Quantity', ["Enter the restock quantity:", "How many units will be added during restocking?"], 'Whole number, e.g. 60', { min: 0 }),
  intField('packagesReceived', 'packagesReceived', 'Packages Received', ["Enter the number of packages received:", "How many packages arrived in the latest delivery?"], 'Whole number, e.g. 5', { min: 0 }),
  doubleField('discountPct', 'discountPercent', 'Discount (%)', ["Enter the discount percentage:", "What discount percentage applies to this product?"], 'e.g. 5.5', { min: 0, max: 100 }),
  doubleField('markupPct', 'markupPercent', 'Markup (%)', ["Enter the markup percentage:", "By what percentage is the price marked up?"], 'e.g. 12.5', { min: 0, max: 1000 }),
  wordField('shelfNumber', 'shelfNumber', 'Shelf Number', ["Enter the shelf number:", "On which shelf is the product displayed?"], 'One word, e.g. A3'),
  intField('expirationYear', 'expirationYear', 'Expiration Year', ["Enter the expiration year:", "In what year does the product expire?"], '4-digit year, e.g. 2027', { min: 2000, max: 2100 }),
  lineField('storageLocation', 'storageLocation', 'Storage Location', ["Enter the storage location:", "Where is the extra stock stored?"], 'e.g. Back room cabinet'),
  doubleField('packageWeight', 'packageWeight', 'Package Weight (kg)', ["Enter the package weight in kilograms:", "How heavy is one package in kilograms?"], 'e.g. 1.25', { min: 0 }),
  intField('unitsPerPack', 'unitsPerPackage', 'Units per Package', ["Enter the number of units per package:", "How many pieces come in one package?"], 'Whole number, e.g. 12', { min: 1 }),
  lineField('description', 'productDescription', 'Description', ["Enter a short product description:", "Describe the product in a short phrase:"], 'e.g. Spicy noodles with calamansi'),
  lineField('flavor', 'productVariant', 'Flavor / Variant', ["Enter the flavor or variant:", "What flavor or variant is this product?"], 'e.g. Sweet and spicy'),
  wordField('deliveryDay', 'deliveryDay', 'Delivery Day', ["Enter the usual delivery day:", "On what day does the supplier usually deliver?"], 'One word, e.g. Monday')],

  patterns: [
  {
    id: 'basic', name: 'Basic Product Record', className: 'SariSariProductRecord',
    summary: 'The core details of one product on the store shelf.',
    slots: [['productName'], ['productCode'], ['category'], ['brand'], ['sellingPrice'], ['stockQty'], ['supplier'], ['size', 'unitOfSale'], ['unitsSold'], ['reorderLevel', 'minOrderQty']]
  },
  {
    id: 'restock', name: 'Restocking Record', className: 'SariSariRestockRecord',
    summary: 'Stock levels, costs, and supplier details for an incoming delivery.',
    slots: [['productName'], ['supplier'], ['category', 'brand'], ['stockQty'], ['restockQty', 'packagesReceived'], ['reorderLevel', 'minOrderQty'], ['unitCost', 'wholesaleCost'], ['sellingPrice', 'markupPct'], ['unitsPerPack', 'storageLocation'], ['shelfNumber', 'deliveryDay']]
  },
  {
    id: 'pricing', name: 'Product and Pricing Record', className: 'SariSariPricingRecord',
    summary: 'How a product is costed, priced, and packaged.',
    slots: [['productName'], ['productCode', 'shelfNumber'], ['brand'], ['size'], ['wholesaleCost', 'unitCost'], ['sellingPrice'], ['discountPct', 'markupPct'], ['stockQty'], ['unitsPerPack'], ['expirationYear']]
  },
  {
    id: 'shelf', name: 'Shelf and Storage Record', className: 'SariSariShelfRecord',
    summary: 'Where a product is displayed and stored, and how long it keeps.',
    slots: [['productName'], ['category'], ['flavor', 'description'], ['shelfNumber'], ['storageLocation'], ['stockQty'], ['packageWeight'], ['expirationYear'], ['unitOfSale', 'size'], ['reorderLevel', 'minOrderQty']]
  },
  {
    id: 'sales', name: 'Weekly Sales Record', className: 'SariSariSalesRecord',
    summary: 'How one product sold this week and what stock remains.',
    slots: [['productName'], ['brand', 'flavor'], ['productCode', 'unitOfSale'], ['sellingPrice'], ['discountPct', 'markupPct'], ['unitsSold'], ['stockQty'], ['reorderLevel', 'restockQty'], ['category', 'supplier'], ['deliveryDay', 'shelfNumber']]
  },
  {
    id: 'supplier-order', name: 'Supplier Order Record', className: 'SariSariSupplierOrder',
    summary: 'An order placed with a supplier and what was delivered.',
    slots: [['supplier'], ['productName'], ['brand', 'category'], ['productCode'], ['minOrderQty'], ['packagesReceived', 'restockQty'], ['unitsPerPack'], ['wholesaleCost', 'unitCost'], ['packageWeight', 'size'], ['deliveryDay', 'storageLocation']]
  }]

};