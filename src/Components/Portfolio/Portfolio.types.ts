export type TProjectModalProps = {
  isOpen: boolean;
  project: TProject | null;
  onClose: () => void;
};

export type TProject = {
  name: string;
  description: string;
  link: string | null;
  src: string;
};
