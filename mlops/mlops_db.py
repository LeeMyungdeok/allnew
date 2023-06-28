from sqlalchemy import Column, DateTime, ForeignKey, String, Text
from sqlalchemy.sql.functions import current_timestamp
from sqlalchemy.types import JSON
from src.db.database import Base


# Projects Table
class Project(Base):
    __tablename__ = "projects"

    project_id = Column(
        String(255),
        primary_key=True,
        comment="projectid",
    )
    project_name = Column(
        String(255),
        nullable=False,
        unique=True,
        comment="projectname",
    )
    description = Column(
        Text,
        nullable=True,
        comment="pdescription",
    )
    created_datetime = Column(
        DateTime(timezone=True),
        server_default=current_timestamp(),
        nullable=False,
    )

# Models Table
class Model(Base):
    __tablename__ = "models"

    model_id = Column(
        String(255),
        primary_key=True,
        comment="modelid",
    )
    project_id = Column(
        String(255),
        ForeignKey("projects.project_id"),
        nullable=False,
        comment="projectid",
    )
    model_name = Column(
        String(255),
        nullable=False,
        comment="modelname",
    )
    description = Column(
        Text,
        nullable=True,
        comment="mdescription",
    )
    created_datetime = Column(
        DateTime(timezone=True),
        server_default=current_timestamp(),
        nullable=False,
    )

# Experiment Table
class Experiment(Base):
    __tablename__ = "experiments"

    experiment_id = Column(
        String(255),
        primary_key=True,
        comment="experimentid",
    )
    model_id = Column(
        String(255),
        ForeignKey("models.model_id"),
        nullable=False,
        comment="modelid",
    )
    model_version_id = Column(
        String(255),
        nullable=False,
        comment="modelversionid",
    )
    parameters = Column(
        JSON,
        nullable=True,
        comment="parameters",
    )
    training_dataset = Column(
        Text,
        nullable=True,
        comment="traindata",
    )
    validation_dataset = Column(
        Text,
        nullable=True,
        comment="validationdata",
    )
    test_dataset = Column(
        Text,
        nullable=True,
        comment="testdataset",
    )
    evaluations = Column(
        JSON,
        nullable=True,
        comment="evaluations",
    )
    artifact_file_paths = Column(
        JSON,
        nullable=True,
        comment="artifactfilepaths",
    )
    created_datetime = Column(
        DateTime(timezone=True),
        server_default=current_timestamp(),
        nullable=False,
    )