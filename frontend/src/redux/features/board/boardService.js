import axios from "axios";

const API_URL = "/api/boards/";

const getAllBoards = async () => {
    const response = await axios.get(API_URL + "getAll");

    return response.data;
};

const createBoard = async (data) => {
    const response = await axios.post(API_URL + "create", data);

    return response.data;
};

const boardService = {
    getAllBoards,
    createBoard,
};

export default boardService;
