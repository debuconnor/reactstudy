export async function getReviews(order = 'createdAt') {
  const query = `order=${order}`;
  const response = await fetch(`http://gcp.devconnor.com/reviews?${query}`);
  const result = await response.json();
  return result;
}

export async function createReviews(formData) {
  const response = await fetch(`http://gcp.devconnor.com/reviews`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
}