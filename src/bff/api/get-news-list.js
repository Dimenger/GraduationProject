export const GetNewsList = async () => {
  try {
    const response = await fetch("http://localhost:3000/news");
    if (!response.ok) {
      throw new Error(`Oшибка получения данных! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Oшибка получения данных!", error);
  }
};
