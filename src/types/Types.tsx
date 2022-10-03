export type movieObject = {
    id?: string;
    title?: string;
    category?: string;
    favorite?: boolean;
    image?: string;
    likes: number;
    dislikes: number;
    hasVoted?: boolean;
  };

export type snackBarObject = {
    handleClose: (event: React.SyntheticEvent | Event) => void;
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning" | undefined;
  };