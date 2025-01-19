import { useState } from "react";
import styles from "./Portfolio.module.scss";
import { projectsConfig } from "./Portfolio.config.ts";
import { EyeOutlined, FolderFilled, FolderOpenFilled } from "@ant-design/icons";
import ProjectModal from "./ProjectModal/ProjectModal.tsx";

const PortfolioView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const showModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Projects</h2>

        <div className={styles.container__inner}>
          {projectsConfig.map((project, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => showModal(project)} // Открытие модалки при клике
            >
              <div className={styles.card__icon}>
                <FolderFilled className={styles.folderIcon} />
                <FolderOpenFilled className={styles.folderOpenIcon} />
                <h3>{project.name}</h3>
              </div>
              <EyeOutlined />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={currentProject}
        onClose={handleModalClose}
      />
    </section>
  );
};

export default PortfolioView;
