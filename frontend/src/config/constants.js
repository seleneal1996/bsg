const CONSTANTS = {
  ROUTES: {
    PUBLIC: {
      SIGN_USER: { to: "/", label: "Cerrar Sesión" },
    },
    PRIVATE: {
      PANEL_ADMIN: { to: "/admin", label: "Panel de administración" },
      PANEL_COLLABORATORS: { to: "/admin", label: "Panel de administración" },
      PANEL_SCHEDULES: { to: "/admin", label: "Panel de administración" },
    },
  },
  API: {
    REACT_APP_API: import.meta.env.VITE_APP_API,
  },
  NAVIGATE: [{ to: "/admin", label: "Panel de administración" }],
};

export default CONSTANTS;
