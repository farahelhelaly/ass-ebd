
import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Alexandria" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  const studentsAndCities = orders.map(order => ({
    student: order.student,
    city: order.city
  }));

  return JSON.stringify(studentsAndCities);
}
