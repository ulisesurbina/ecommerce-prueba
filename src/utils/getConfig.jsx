const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("key")}` }
});

export default getConfig;