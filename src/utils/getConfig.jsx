const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("email", "password")}` }
});

export default getConfig;