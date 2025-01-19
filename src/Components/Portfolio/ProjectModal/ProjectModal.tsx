import { Modal } from "antd";
import type { TProjectModalProps } from "../Portfolio.types.ts";
import styles from "../Portfolio.module.scss";

const ProjectModal: React.FC<TProjectModalProps> = (props) => {
  const { isOpen, project, onClose } = props;
  const handleRedirect = (url: string | null | undefined) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Modal width={800} open={isOpen} onCancel={onClose} footer={null}>
      <h3 className={styles.modal__title}>{project?.name}</h3>

      <p className={styles.modal__subtitle}>{project?.description}</p>

      <img
        src={project?.src}
        alt={project?.name}
        style={{ width: "100%", marginTop: "16px" }}
      />

      {!project ||
        (project.link && (
          <button
            className={styles.modal__button}
            onClick={() => handleRedirect(project?.link)}
          >
            Visit project
          </button>
        ))}
    </Modal>
  );
};

export default ProjectModal;
