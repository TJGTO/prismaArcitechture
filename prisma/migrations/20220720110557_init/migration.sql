-- CreateTable
CREATE TABLE `TrainingDetails` (
    `trainningid` INTEGER NOT NULL AUTO_INCREMENT,
    `header` VARCHAR(255) NOT NULL,
    `time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`trainningid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
