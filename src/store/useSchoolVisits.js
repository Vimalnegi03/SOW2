import { create } from "zustand";
import axios from "axios";

const useVisitStore = create((set) => ({
 visits: [],
  loading: false,
  fetchVisits: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("https://sow2-backend-deploy.onrender.com/api/visits/last20");
      set({ visits: res.data, loading: false });
    } catch (err) {
      console.error("Error fetching visits:", err);
      set({ loading: false });
    }
  },
}));

export default useVisitStore;
