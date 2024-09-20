import Link from "next/link";
import React from "react";
import Image from "next/image";
// const menuItems = [
//   {
//     title: "MENU",
//     items: [
//       {
//         icon: "/home.png",
//         label: "Home",
//         href: "/",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/teacher.png",
//         label: "Teachers",
//         href: "/teachers",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/student.png",
//         label: "Students",
//         href: "/students",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/parent.png",
//         label: "Parents",
//         href: "/parents",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/subject.png",
//         label: "Subjects",
//         href: "/subjects",
//         visible: ["admin"],
//       },
//       {
//         icon: "/class.png",
//         label: "Classes",
//         href: "/classes",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/lesson.png",
//         label: "Lessons",
//         href: "/lessons",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/exam.png",
//         label: "Exams",
//         href: "/exams",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/assignment.png",
//         label: "Assignments",
//         href: "/assignments",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/result.png",
//         label: "Results",
//         href: "/results",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/attendance.png",
//         label: "Attendance",
//         href: "/attendance",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/calendar.png",
//         label: "Events",
//         href: "/events",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/message.png",
//         label: "Messages",
//         href: "/messages",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/announcement.png",
//         label: "Announcements",
//         href: "/announcements",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
//   {
//     title: "OTHER",
//     items: [
//       {
//         icon: "/profile.png",
//         label: "Profile",
//         href: "/profile",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/setting.png",
//         label: "Settings",
//         href: "/settings",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/logout.png",
//         label: "Logout",
//         href: "/logout",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
// ];
import {
  FaHome,
  FaBox,
  FaChartBar,
  FaDollarSign,
  FaUser,
  FaList,
  FaBoxOpen,
  FaIndustry,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: <FaHome />,
        label: "Dashboard",
        href: "/dashboard/overview",
        visible: ["admin", "manager", "cashier"],
      },
      {
        icon: <FaChartBar />,
        label: "Sales Summary",
        href: "/dashboard/sales-summary",
        visible: ["admin", "manager"],
      },
      {
        icon: <FaBox />,
        label: "Stock Management",
        href: "/stock",
        visible: ["admin", "manager"],
        subItems: [
          {
            label: "Products",
            href: "/stock/products",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "Add/Update Products",
                href: "/stock/products/add",
                visible: ["admin", "manager"],
              },
              {
                label: "Product List",
                href: "/stock/products/list",
                visible: ["admin", "manager"],
              },
            ],
          },
          {
            label: "Inventory",
            href: "/stock/inventory",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "View Stock Levels",
                href: "/stock/levels/view",
                visible: ["admin", "manager"],
              },
              {
                label: "Manage Inventory",
                href: "/stock/manage",
                visible: ["admin", "manager"],
              },
            ],
          },
        ],
      },
      {
        icon: <FaList />,
        label: "Orders",
        href: "/orders",
        visible: ["admin", "cashier"],
        subItems: [
          {
            label: "Sales Orders",
            href: "/orders/sales",
            visible: ["admin", "cashier"],
            subItems: [
              {
                label: "Create New Sales Order",
                href: "/orders/sales/create",
                visible: ["admin", "cashier"],
              },
              {
                label: "Sales Order List",
                href: "/orders/sales/list",
                visible: ["admin", "manager"],
              },
            ],
          },
          {
            label: "Purchase Orders",
            href: "/orders/purchase",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "Create New Purchase Order",
                href: "/orders/purchase/create",
                visible: ["admin", "manager"],
              },
              {
                label: "Purchase Order List",
                href: "/orders/purchase/list",
                visible: ["admin", "manager"],
              },
            ],
          },
        ],
      },
      {
        icon: <FaDollarSign />,
        label: "Financial Management",
        href: "/financial",
        visible: ["admin", "manager"],
        subItems: [
          {
            label: "Transactions",
            href: "/financial/transactions",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "Record Transactions",
                href: "/financial/transactions/record",
                visible: ["admin", "manager"],
              },
              {
                label: "Transaction History",
                href: "/financial/transactions/history",
                visible: ["admin", "manager"],
              },
            ],
          },
          {
            label: "Reports",
            href: "/financial/reports",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "Financial Reports",
                href: "/financial/reports/summary",
                visible: ["admin", "manager"],
              },
              {
                label: "Expense Reports",
                href: "/financial/reports/expenses",
                visible: ["admin", "manager"],
              },
            ],
          },
        ],
      },
      {
        icon: <FaIndustry />,
        label: "Production",
        href: "/production",
        visible: ["admin", "manager"],
        subItems: [
          {
            label: "Formulas",
            href: "/production/formulas",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "Add/Update Formulas",
                href: "/production/formulas/add",
                visible: ["admin", "manager"],
              },
              {
                label: "Formula List",
                href: "/production/formulas/list",
                visible: ["admin", "manager"],
              },
            ],
          },
          {
            label: "Maintenance",
            href: "/production/maintenance",
            visible: ["admin", "manager"],
            subItems: [
              {
                label: "Schedule Maintenance",
                href: "/production/maintenance/schedule",
                visible: ["admin", "manager"],
              },
              {
                label: "Maintenance History",
                href: "/production/maintenance/history",
                visible: ["admin", "manager"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        icon: <FaUser />,
        label: "User Management",
        href: "/account/users",
        visible: ["admin"],
        subItems: [
          {
            label: "Add/Update Users",
            href: "/account/users/add",
            visible: ["admin"],
          },
          {
            label: "User List",
            href: "/account/users/list",
            visible: ["admin"],
          },
          {
            label: "Manage Roles",
            href: "/account/roles",
            visible: ["admin"],
          },
        ],
      },
      {
        icon: <FaUser />,
        label: "Profile",
        href: "/account/profile",
        visible: ["admin", "manager", "cashier", "employee"],
      },
      {
        icon: <FaUser />,
        label: "Settings",
        href: "/account/settings",
        visible: ["admin"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="flex flex-col justify-between h-full px-2 pb-2 ">
      {menuItems.map((menu) => (
        <div key={menu.title}>
          <h2 className="mt-5 text-gray-500 hidden lg:block font-light">
            {menu.title}
          </h2>
          <ul className="flex flex-col gap-2 ">
            {menu.items.map((item) => (
              <li
                key={item.label}
                className="hover:border-cyan-300 border-transparent border-4 rounded-xl p-2 hover:cursor-pointer"
              >
                <Link
                  href={item.href}
                  className="flex flex-row gap-2 justify-center lg:justify-start items-center"
                >
                  {/* <Image
                    src={item.icon}
                    alt={item.label}
                    width={25}
                    height={20}
                  /> */}
                  {item.icon}
                  <span className="text-black hidden lg:block">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
