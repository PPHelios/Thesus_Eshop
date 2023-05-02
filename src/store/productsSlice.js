import produce from "immer";
import { apiRequest } from "./apiRequest";
export const productsSlice = (set, get) => ({
  products: [
    {
      _id: "640c474a7f8c1ac841e72db1",
      name: "Blue Weekend Boot",
      nameAr: "حذاء البوت الأزرق لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2200,
      discountPercentage: 0,
      soldOut: false,
      img: "weekendBootBlue",
      alt: "blue Weekend Boot",
      category: "Weekend Boot",
      rating: 4,
      stock: [
        { size: 37, quantity: 0 },
        { size: 38, quantity: 3 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 0 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db2",
      name: "Weekend Boot Indigo",
      nameAr: "حذاء البوت السماوي لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2300,
      discountPercentage: 10,
      soldOut: false,
      img: "weekendBootIndigo",
      alt: "weekend Boot Indigo",
      category: "Weekend Boot",
      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 0 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 0 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db3",
      name: "Week End Boot Teal",
      nameAr: "حذاء البوت الكحلي لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2100,
      discountPercentage: 10,
      soldOut: false,
      img: "weekendBootTeal",
      alt: "weekend Boot Teal",
      category: "Weekend Boot",

      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 0 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db4",
      name: "Weekend Boot Allegra",
      nameAr: "حذاء البوت الأبيض لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2400,
      discountPercentage: 0,
      soldOut: true,
      img: "weekendBootAllegra",
      alt: "Farah Weekend red Boot",
      category: "Weekend Boot",
      rating: 4,
      stock: [
        { size: 37, quantity: 0 },
        { size: 38, quantity: 0 },
        { size: 39, quantity: 0 },
        { size: 40, quantity: 0 },
        { size: 41, quantity: 0 },
        { size: 42, quantity: 0 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db5",
      name: "Weekend Boot ZGrey",
      nameAr: "حذاء البوت الرمادي لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2200,
      discountPercentage: 10,
      soldOut: false,
      img: "weekendBootZGrey",
      alt: "Farah Weekend red Boot",
      category: "Weekend Boot",
      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 3 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 0 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db6",
      name: "The Farrah Weekend Boot",
      nameAr: "حذاء فرح لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2100,
      discountPercentage: 0,
      soldOut: false,
      img: "bootRed",
      alt: "Farah Weekend red Boot",
      category: "Weekend Boot",
      rating: 4,
      stock: [
        { size: 37, quantity: 0 },
        { size: 38, quantity: 3 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: true,
      ourProducts: true,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db7",
      name: "The Simone Weekend Boot",
      nameAr: "حذاء سيمون لعطله نهايه الاسبوع",
      description:
        "The Weekend Boot is a comfy, water resistant and breathable all-year boot. Each pair is made with a tough recycled nylon and natural rubber sole",
      descriptionAr:
        "حذاء البوت مريح و مضاد للماء و جيد التهويه مما يجعله مناسبا طوال العام. كل حذاء مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2400,
      discountPercentage: 0,
      soldOut: false,
      img: "bootMarlin",
      alt: "Farah Weekend red Boot",
      category: "Weekend Boot",
      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 3 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 0 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: true,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db8",
      name: "Terrus Allegra",
      nameAr: "حذاء تراس الخفيف لون أبيض",
      description:
        "The Terrus is an easy, comfy slip on. The upper is made of a tough recycled nylon and natural rubber sole.",
      descriptionAr:
        "الحذاء الخفيف مريح و مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 1800,
      discountPercentage: 0,
      soldOut: false,
      img: "TerrusAllegra",
      alt: "Terrus Allegra clog",
      category: "Terrus Clog",
      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 0 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72db9",
      name: "Terrus Beige",
      nameAr: "حذاء تراس الخفيف لون بيج",
      description:
        "The Terrus is an easy, comfy slip on. The upper is made of a tough recycled nylon and natural rubber sole.",
      descriptionAr:
        "الحذاء الخفيف مريح و مصنوع من النايلون المقوي المعاد تدويره و نعل من الجلد الطبيعي.",
      price: 2000,
      discountPercentage: 10,
      soldOut: false,
      img: "TerrusBeige",
      alt: "Terrus Beige clog",
      category: "Terrus Clog",
      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 3 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 0 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: true,
      __v: 0,
    },
    {
      _id: "640c474a7f8c1ac841e72dba",
      name: "Terrus Sage",
      nameAr: "حذاء تراس الخفيف لون زيتي",
      description: "",
      descriptionAr: "",
      price: 1900,
      discountPercentage: 0,
      soldOut: false,
      img: "TerrusSage",
      alt: "Terrus Sage clog",
      category: "Terrus Clog",
      rating: 4,
      stock: [
        { size: 37, quantity: 3 },
        { size: 38, quantity: 0 },
        { size: 39, quantity: 3 },
        { size: 40, quantity: 3 },
        { size: 41, quantity: 3 },
        { size: 42, quantity: 3 },
      ],
      stockQuantity: function () {
        return this.stock.reduce((total, next) => total + next.quantity, 0);
      },
      newArrival: false,
      ourProducts: false,
      __v: 0,
    },
  ],
  getProducts: async () => {
    try {
      const fetchedProducts = await apiRequest(
        "http://localhost:8000/products/getProducts",
        "GET"
      );
      console.log(fetchedProducts);
      set((state) => ({ products: fetchedProducts }));
      return null;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  addProduct: async (newProduct) => {
    try {
      const res = await apiRequest(
        "http://localhost:8000/products/addProduct",
        "POST",
        newProduct
      );
      // console.log(res);
      set(
        produce((state) => {
          state.products.push(res);
        })
      );

      return res;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  editProduct: async (productId, formData) => {
    const productsBeforeSubmit = get().products;
    const newProductsList = get().products.filter(
      (product) => product._id !== productId
    );
    newProductsList.push(formData);

    try {
      const data = await apiRequest(
        `http://localhost:8000/products/${productId}/edit`,
        "PUT",
        { formData }
      );
      if(data){
              set((state) => ({ products: newProductsList }));

      }
    } catch (err) {
      set((state) => ({ products: productsBeforeSubmit }));
      throw new Error(err.message);
    }
  },
  deleteProduct: async ({ id }) => {
    const productsBeforeSubmit = get().products;
    const newProductsList = get().products.filter(
      (product) => product._id !== id
    );
    set((state) => ({ products: newProductsList }));
    try {
      const data = await apiRequest(
        "http://localhost:8000/products/deleteProduct",
        "DELETE",
        { id }
      );
      return data.message;
    } catch (err) {
      set((state) => ({ products: productsBeforeSubmit }));
      throw new Error(err.message);
    }
  },
  findProduct: async (productId) => {
    const productToEdit = await get().products.find((product) => {
      return product._id === productId;
    });
    return productToEdit;
  },
});

//set(produce((state) => (state.cart[index].q = newq)));
