import loadUser from "../loadUser";
import httpGet from "../http";

jest.mock("../http");

beforeEach(() => {
    jest.resetAllMocks();
});
test("should call loadUser once", () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toHaveBeenLastCalledWith("http://server:8080/users/1");
});