const menudata = [
  {
    id: 1,
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 2,
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 3,
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1601823281975-75d81b28c373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 4,
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 5,
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1557499305-0af888c3d8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 6,
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1582391123232-6130296f1fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 7,
    label: "Appetizers",
    value: "appetizers",
    img: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 8,
    label: "Appetizers",
    value: "appetizers",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 9,
    label: "Appetizers",
    value: "appetizers",
    img: "https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 10,
    label: "Appetizers",
    value: "appetizers",
    img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 11,
    label: "Desserts",
    value: "desserts",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 12,
    label: "Desserts",
    value: "desserts",
    img: "https://images.unsplash.com/photo-1497681204192-eb12c0702305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 13,
    label: "Desserts",
    value: "desserts",
    img: "https://images.unsplash.com/photo-1474045326708-cdc78c2487cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 14,
    label: "Drinks",
    value: "drinks",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 15,
    label: "Drinks",
    value: "drinks",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 16,
    label: "Drinks",
    value: "drinks",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1914&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 17,
    label: "Drinks",
    value: "drinks",
    img: "https://images.unsplash.com/photo-1592858167090-2473780d894d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 18,
    label: "Drinks",
    value: "drinks",
    img: "https://images.unsplash.com/photo-1620832107928-6d835b70fcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 19,
    label: "Alcohol",
    value: "alcohol",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 20,
    label: "Alcohol",
    value: "alcohol",
    img: "https://images.unsplash.com/photo-1615887625746-f3d2aa27e048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
];

export default menudata;
