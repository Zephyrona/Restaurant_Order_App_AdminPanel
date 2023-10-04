const TABLE_HEAD = [
  "Account",
  "Amount",
  "Date and Time",
  "Status",
  "Payment Method",
  "Order List",
];

const TABLE_ROWS = [
  {
    id: 1,
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    account: "Elcan Eyvazli",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    method: "cash",
    orderdata: [
      {
        id: 11,
        label: "Main Meals",
        value: "Main Meals",
        img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        price: "$95.00",
        size: 1,
      },
      {
        id: 11,
        label: "Main Meals",
        value: "Main Meals",
        img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        price: "$95.00",
        size: 1,
      },
      {
        id: 11,
        label: "Main Meals",
        value: "Main Meals",
        img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        price: "$95.00",
        size: 1,
      },
    ],
  },
  {
    id: 2,
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    account: "Revan Asadov",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "pending",
    method: "card",
    orderdata: [
      {
        id: 21,
        label: "Main Me",
        value: "Main Meals",
        img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        price: "$95.00",
        size: 1,
      },
    ],
  },
  {
    id: 3,
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    account: "Joshua Kelly",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "cancelled",
    method: "cash",
    orderdata: [
      {
        id: 31,
        label: "Main ",
        value: "Main Meals",
        img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        price: "$95.00",
        size: 1,
      },
    ],
  },
];

export { TABLE_HEAD, TABLE_ROWS };
