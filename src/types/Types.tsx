export type movieObject = {
    id?: string;
    title?: string;
    category?: string;
    favorite?: boolean;
    likes: number;
    dislikes: number;
    handleMovieDelete?: () => void;
    handleFavoriteToggle?: () => void;
  };

export type snackBarObject = {
    handleClose: (event: React.SyntheticEvent | Event) => void;
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning" | undefined;
  };