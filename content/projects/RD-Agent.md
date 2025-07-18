
---
title: RD-Agent
type: page
date: 2025-03-16T00:00:00
tags: ["None"]
description: "Research and development (R&D) is crucial for the enhancement of industrial productivity, especially in the AI era, where the core aspects of R&D are mainly focused on data and models. We are committed to automating these high-value generic R&D processes through our open source R&D automation tool RD-Agent, which lets AI drive data-driven AI."
---


<h4 align="center">
  <img src="docs/_static/logo.png" alt="RA-Agent logo" style="width:70%; ">
  
  <a href="https://rdagent.azurewebsites.net" target="_blank">🖥️ Live Demo</a> | <a href="https://rdagent.azurewebsites.net/factor_loop" target="_blank">🎥 Demo Video</a> <a href="https://www.youtube.com/watch?v=JJ4JYO3HscM&list=PLALmKB0_N3_i52fhUmPQiL4jsO354uopR" target="_blank">▶️YouTube</a>   | <a href="https://rdagent.readthedocs.io/en/latest/index.html" target="_blank">📖 Documentation</a> | <a href="#-paperwork-list"> 📃 Papers </a>
</h3>


[![CI](https://github.com/microsoft/RD-Agent/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/RD-Agent/actions/workflows/ci.yml)
[![CodeQL](https://github.com/microsoft/RD-Agent/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/microsoft/RD-Agent/actions/workflows/github-code-scanning/codeql)
[![Dependabot Updates](https://github.com/microsoft/RD-Agent/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/microsoft/RD-Agent/actions/workflows/dependabot/dependabot-updates)
[![Lint PR Title](https://github.com/microsoft/RD-Agent/actions/workflows/pr.yml/badge.svg)](https://github.com/microsoft/RD-Agent/actions/workflows/pr.yml)
[![Release.yml](https://github.com/microsoft/RD-Agent/actions/workflows/release.yml/badge.svg)](https://github.com/microsoft/RD-Agent/actions/workflows/release.yml)
[![Platform](https://img.shields.io/badge/platform-Linux-blue)](https://pypi.org/project/rdagent/#files)
[![PyPI](https://img.shields.io/pypi/v/rdagent)](https://pypi.org/project/rdagent/)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/rdagent)](https://pypi.org/project/rdagent/)
[![Release](https://img.shields.io/github/v/release/microsoft/RD-Agent)](https://github.com/microsoft/RD-Agent/releases)
[![GitHub](https://img.shields.io/github/license/microsoft/RD-Agent)](https://github.com/microsoft/RD-Agent/blob/main/LICENSE)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
[![Checked with mypy](https://www.mypy-lang.org/static/mypy_badge.svg)](http://mypy-lang.org/)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![Chat](https://img.shields.io/badge/chat-discord-blue)](https://discord.gg/ybQ97B6Jjy)
[![Documentation Status](https://readthedocs.org/projects/rdagent/badge/?version=latest)](https://rdagent.readthedocs.io/en/latest/?badge=latest)
[![Readthedocs Preview](https://github.com/microsoft/RD-Agent/actions/workflows/readthedocs-preview.yml/badge.svg)](https://github.com/microsoft/RD-Agent/actions/workflows/readthedocs-preview.yml) <!-- this badge is too long, please place it in the last one to make it pretty --> 

# 📰 News
| 🗞️ News        | 📝 Description                 |
| --            | ------      
| Kaggle Scenario release | We release **[Kaggle Agent](https://rdagent.readthedocs.io/en/latest/scens/kaggle_agent.html)**, try the new features!                  |
| Official WeChat group release  | We created a WeChat group, welcome to join! (🗪[QR Code](docs/WeChat_QR_code.jpg)) |
| Official Discord release  | We launch our first chatting channel in Discord (🗪[![Chat](https://img.shields.io/badge/chat-discord-blue)](https://discord.gg/ybQ97B6Jjy)) |
| First release | **RDAgent** is released on GitHub |


# 🌟 Introduction
<div align="center">
      <img src="docs/_static/scen.png" alt="Our focused scenario" style="width:80%; ">
</div>

RDAgent aims to automate the most critical and valuable aspects of the industrial R&D process, and we begin with focusing on the data-driven scenarios to streamline the development of models and data. 
Methodologically, we have identified a framework with two key components: 'R' for proposing new ideas and 'D' for implementing them.
We believe that the automatic evolution of R&D will lead to solutions of significant industrial value.


<!-- Tag Cloud -->
R&D is a very general scenario. The advent of RDAgent can be your
- 💰 **Automatic Quant Factory** ([🎥Demo Video](https://rdagent.azurewebsites.net/factor_loop)|[▶️YouTube](https://www.youtube.com/watch?v=X4DK2QZKaKY&t=6s))
- 🤖 **Data Mining Agent:** Iteratively proposing data & models ([🎥Demo Video 1](https://rdagent.azurewebsites.net/model_loop)|[▶️YouTube](https://www.youtube.com/watch?v=dm0dWL49Bc0&t=104s)) ([🎥Demo Video 2](https://rdagent.azurewebsites.net/dmm)|[▶️YouTube](https://www.youtube.com/watch?v=VIaSTZuoZg4))  and implementing them by gaining knowledge from data.
- 🦾 **Research Copilot:** Auto read research papers ([🎥Demo Video](https://rdagent.azurewebsites.net/report_model)|[▶️YouTube](https://www.youtube.com/watch?v=BiA2SfdKQ7o)) / financial reports ([🎥Demo Video](https://rdagent.azurewebsites.net/report_factor)|[▶️YouTube](https://www.youtube.com/watch?v=ECLTXVcSx-c)) and implement model structures or building datasets.
- 🤖 **Kaggle Agent:** Auto Model Tuning and Feature Engineering([🎥Demo Video Coming Soon...]()) and implementing them to achieve more in competitions.
- ...

You can click the links above to view the demo. We're continuously adding more methods and scenarios to the project to enhance your R&D processes and boost productivity. 

Additionally, you can take a closer look at the examples in our **[🖥️ Live Demo](https://rdagent.azurewebsites.net/)**.

<div align="center">
    <a href="https://rdagent.azurewebsites.net/" target="_blank">
        <img src="docs/_static/demo.png" alt="Watch the demo" width="80%">
    </a>
</div>


# ⚡ Quick start

You can try above demos by running the following command:

### 🐳 Docker installation.
Users must ensure Docker is installed before attempting most scenarios. Please refer to the [official 🐳Docker page](https://docs.docker.com/engine/install/) for installation instructions.

### 🐍 Create a Conda Environment
- Create a new conda environment with Python (3.10 and 3.11 are well-tested in our CI):
  ```sh
  conda create -n rdagent python=3.10
  ```
- Activate the environment:
  ```sh
  conda activate rdagent
  ```

### 🛠️ Install the RDAgent
- You can directly install the RDAgent package from PyPI:
  ```sh
  pip install rdagent
  ```

### 💊 Health check
- rdagent provides a health check that currently checks two things.
  - whether the docker installation was successful.
  - whether the default port used by the [rdagent ui](https://github.com/microsoft/RD-Agent?tab=readme-ov-file#%EF%B8%8F-monitor-the-application-results) is occupied.
  ```sh
  rdagent health_check
  ```


### ⚙️ Configuration
- The demos requires following ability:
  - ChatCompletion
  - json_mode
  - embedding query

- For example: If you are using the `OpenAI API`, you have to configure your GPT model in the `.env` file like this.
  ```bash
  cat << EOF  > .env
  OPENAI_API_KEY=<replace_with_your_openai_api_key>
  # EMBEDDING_MODEL=text-embedding-3-small
  CHAT_MODEL=gpt-4-turbo
  EOF
  ```
- However, not every API services support these features by devault. For example: `AZURE OpenAI`, you have to configure your GPT model in the `.env` file like this.
  ```bash
  cat << EOF  > .env
  USE_AZURE=True
  EMBEDDING_OPENAI_API_KEY=<replace_with_your_azure_openai_api_key>
  EMBEDDING_AZURE_API_BASE=<replace_with_your_azure_endpoint>
  EMBEDDING_AZURE_API_VERSION=<replace_with_the_version_of_your_azure_openai_api>
  EMBEDDING_MODEL=text-embedding-3-small
  CHAT_OPENAI_API_KEY=<replace_with_your_azure_openai_api_key>
  CHAT_AZURE_API_BASE=<replace_with_your_azure_endpoint>
  CHAT_AZURE_API_VERSION=<replace_with_the_version_of_your_azure_openai_api>
  CHAT_MODEL=<replace_it_with_the_name_of_your_azure_chat_model>
  EOF
  ```
- For more configuration information, please refer to the [documentation](https://rdagent.readthedocs.io/en/latest/installation_and_configuration.html).

### 🚀 Run the Application

The **[🖥️ Live Demo](https://rdagent.azurewebsites.net/)** is implemented by the following commands(each item represents one demo, you can select the one you prefer):

- Run the **Automated Quantitative Trading & Iterative Factors Evolution**:  [Qlib](http://github.com/microsoft/qlib) self-loop factor proposal and implementation application
  ```sh
  rdagent fin_factor
  ```

- Run the **Automated Quantitative Trading & Iterative Model Evolution**: [Qlib](http://github.com/microsoft/qlib) self-loop model proposal and implementation application
  ```sh
  rdagent fin_model
  ```

- Run the **Automated Medical Prediction Model Evolution**: Medical self-loop model proposal and implementation application
  >(1) Apply for an account at [PhysioNet](https://physionet.org/). <br /> (2) Request access to FIDDLE preprocessed data: [FIDDLE Dataset](https://physionet.org/content/mimic-eicu-fiddle-feature/1.0.0/). <br />
  (3) Place your username and password in `.env`.
  ```bash
  cat << EOF  >> .env
  DM_USERNAME=<your_username>
  DM_PASSWORD=<your_password>
  EOF
  ```
  ```sh
  rdagent med_model
  ```

- Run the **Automated Quantitative Trading & Factors Extraction from Financial Reports**:  Run the [Qlib](http://github.com/microsoft/qlib) factor extraction and implementation application based on financial reports
  ```sh
  # 1. Generally, you can run this scenario using the following command:
  rdagent fin_factor_report --report_folder=<Your financial reports folder path>

  # 2. Specifically, you need to prepare some financial reports first. You can follow this concrete example:
  wget https://github.com/SunsetWolf/rdagent_resource/releases/download/reports/all_reports.zip
  unzip all_reports.zip -d git_ignore_folder/reports
  rdagent fin_factor_report --report_folder=git_ignore_folder/reports
  ```

- Run the **Automated Model Research & Development Copilot**: model extraction and implementation application
  ```sh
  # 1. Generally, you can run your own papers/reports with the following command:
  rdagent general_model <Your paper URL>

  # 2. Specifically, you can do it like this. For more details and additional paper examples, use `rdagent general_model -h`:
  rdagent general_model  "https://arxiv.org/pdf/2210.09789"
  ```

- Run the **Automated Kaggle Model Tuning & Feature Engineering**:  self-loop model proposal and feature engineering implementation application <br />
  > Using **sf-crime** *(San Francisco Crime Classification)* as an example. <br />
  > 1. Register and login on the [Kaggle](https://www.kaggle.com/) website. <br />
  > 2. Configuring the Kaggle API. <br />
  > (1) Click on the avatar (usually in the top right corner of the page) -> `Settings` -> `Create New Token`, A file called `kaggle.json` will be downloaded. <br />
  > (2) Move `kaggle.json` to `~/.config/kaggle/` <br />
  > (3) Modify the permissions of the kaggle.json file. Reference command: `chmod 600 ~/.config/kaggle/kaggle.json` <br />
  > 3. Join the competition: Click `Join the competition` -> `I Understand and Accept` at the bottom of the [competition details page](https://www.kaggle.com/competitions/sf-crime/data).
  ```bash
  # Generally, you can run the Kaggle competition program with the following command:
  rdagent kaggle --competition <your competition name>
  
  # Specifically, you will need to first prepare some competition description files and configure the competition description file path, which you can follow for this specific example:
  
  # 1. Prepare the competition description files
  wget https://github.com/SunsetWolf/rdagent_resource/releases/download/kaggle_data/kaggle_data.zip
  unzip kaggle_data.zip -d git_ignore_folder/kaggle_data

  # 2. Add the competition description file path to the `.env` file.
  dotenv set KG_LOCAL_DATA_PATH "$(pwd)/git_ignore_folder/kaggle_data"

  # 3. run the application
  rdagent kaggle --competition sf-crime
  ```
  > **Description of the above example:** <br />
  > - Kaggle competition data, contains two parts: competition description file (json file) and competition dataset (zip file). We prepare the competition description file for you, the competition dataset will be downloaded automatically when you run the program, as in the example. <br />
  > - If you want to download the competition description file automatically, you need to install chromedriver, The instructions for installing chromedriver can be found in the [documentation](https://rdagent.readthedocs.io/en/latest/scens/kaggle_agent.html#example-guide). <br />
  > - The **Competition List Available** can be found [here](https://rdagent.readthedocs.io/en/latest/scens/kaggle_agent.html#competition-list-available). <br />

### 🖥️ Monitor the Application Results
- You can run the following command for our demo program to see the run logs.

  ```sh
  rdagent ui --port 19899 --log_dir <your log folder like "log/">
  ```

  **Note:** Although port 19899 is not commonly used, but before you run this demo, you need to check if port 19899 is occupied. If it is, please change it to another port that is not occupied.

  You can check if a port is occupied by running the following command.

  ```sh
  rdagent health_check
  ```

# 🏭 Scenarios

We have applied RD-Agent to multiple valuable data-driven industrial scenarios.


## 🎯 Goal: Agent for Data-driven R&D

In this project, we are aiming to build an Agent to automate Data-Driven R\&D that can
+ 📄 Read real-world material (reports, papers, etc.) and **extract** key formulas, descriptions of interested **features** and **models**, which are the key components of data-driven R&D .
+ 🛠️ **Implement** the extracted formulas (e.g., features, factors, and models) in runnable codes.
   + Due to the limited ability of LLM in implementing at once, build an evolving process for the agent to improve performance by learning from feedback and knowledge.
+ 💡 Propose **new ideas** based on current knowledge and observations.

<!-- ![Data-Centric R&D Overview](docs/_static/overview.png) -->

## 📈 Scenarios/Demos

In the two key areas of data-driven scenarios, model implementation and data building, our system aims to serve two main roles: 🦾Copilot and 🤖Agent. 
- The 🦾Copilot follows human instructions to automate repetitive tasks. 
- The 🤖Agent, being more autonomous, actively proposes ideas for better results in the future.

The supported scenarios are listed below:

| Scenario/Target | Model Implementation                   | Data Building                                                                      |
| --              | --                                     | --                                                                                 |
| **💹 Finance**      | 🤖 [Iteratively Proposing Ideas & Evolving](https://rdagent.azurewebsites.net/model_loop)[▶️YouTube](https://www.youtube.com/watch?v=dm0dWL49Bc0&t=104s) |  🤖 [Iteratively Proposing Ideas & Evolving](https://rdagent.azurewebsites.net/factor_loop) [▶️YouTube](https://www.youtube.com/watch?v=X4DK2QZKaKY&t=6s) <br/>   🦾 [Auto reports reading & implementation](https://rdagent.azurewebsites.net/report_factor)[▶️YouTube](https://www.youtube.com/watch?v=ECLTXVcSx-c)  |
| **🩺 Medical**      | 🤖 [Iteratively Proposing Ideas & Evolving](https://rdagent.azurewebsites.net/dmm)[▶️YouTube](https://www.youtube.com/watch?v=VIaSTZuoZg4) | -                                                                                  |
| **🏭 General**      | 🦾 [Auto paper reading & implementation](https://rdagent.azurewebsites.net/report_model)[▶️YouTube](https://www.youtube.com/watch?v=BiA2SfdKQ7o) <br/> 🤖 Auto Kaggle Model Tuning   | 🤖Auto Kaggle feature Engineering |

- **[RoadMap](https://rdagent.readthedocs.io/en/latest/scens/kaggle_agent.html#roadmap)**: Currently, we are working hard to add new features to the Kaggle scenario.

Different scenarios vary in entrance and configuration. Please check the detailed setup tutorial in the scenarios documents.

Here is a gallery of [successful explorations](https://github.com/SunsetWolf/rdagent_resource/releases/download/demo_traces/demo_traces.zip) (5 traces showed in **[🖥️ Live Demo](https://rdagent.azurewebsites.net/)**). You can download and view the execution trace using [this command](https://github.com/microsoft/RD-Agent?tab=readme-ov-file#%EF%B8%8F-monitor-the-application-results) from the documentation.

Please refer to **[📖readthedocs_scen](https://rdagent.readthedocs.io/en/latest/scens/catalog.html)** for more details of the scenarios.

# ⚙️ Framework

<div align="center">
    <img src="docs/_static/Framework-RDAgent.png" alt="Framework-RDAgent" width="85%">
</div>


Automating the R&D process in data science is a highly valuable yet underexplored area in industry. We propose a framework to push the boundaries of this important research field.

The research questions within this framework can be divided into three main categories:
| Research Area | Paper/Work List |
|--------------------|-----------------|
| **Benchmark the R&D abilities** | [Benchmark](#benchmark) |
| **Idea proposal:** Explore new ideas or refine existing ones | [Research](#research) |
| **Ability to realize ideas:** Implement and execute ideas | [Development](#development) |

We believe that the key to delivering high-quality solutions lies in the ability to evolve R&D capabilities. Agents should learn like human experts, continuously improving their R&D skills.

More documents can be found in the **[📖 readthedocs](https://rdagent.readthedocs.io/)**.

# 📃 Paper/Work list

## 📊 Benchmark
- [Towards Data-Centric Automatic R&D](https://arxiv.org/abs/2404.11276)
```BibTeX
@misc{chen2024datacentric,
    title={Towards Data-Centric Automatic R&D},
    author={Haotian Chen and Xinjie Shen and Zeqi Ye and Wenjun Feng and Haoxue Wang and Xiao Yang and Xu Yang and Weiqing Liu and Jiang Bian},
    year={2024},
    eprint={2404.11276},
    archivePrefix={arXiv},
    primaryClass={cs.AI}
}
```
![image](https://github.com/user-attachments/assets/494f55d3-de9e-4e73-ba3d-a787e8f9e841)

## 🔍 Research

In a data mining expert's daily research and development process, they propose a hypothesis (e.g., a model structure like RNN can capture patterns in time-series data), design experiments (e.g., finance data contains time-series and we can verify the hypothesis in this scenario), implement the experiment as code (e.g., Pytorch model structure), and then execute the code to get feedback (e.g., metrics, loss curve, etc.). The experts learn from the feedback and improve in the next iteration.

Based on the principles above, we have established a basic method framework that continuously proposes hypotheses, verifies them, and gets feedback from the real-world practice. This is the first scientific research automation framework that supports linking with real-world verification.

For more detail, please refer to our **[🖥️ Live Demo page](https://rdagent.azurewebsites.net)**.

## 🛠️ Development

- [Collaborative Evolving Strategy for Automatic Data-Centric Development](https://arxiv.org/abs/2407.18690)
```BibTeX
@misc{yang2024collaborative,
    title={Collaborative Evolving Strategy for Automatic Data-Centric Development},
    author={Xu Yang and Haotian Chen and Wenjun Feng and Haoxue Wang and Zeqi Ye and Xinjie Shen and Xiao Yang and Shizhao Sun and Weiqing Liu and Jiang Bian},
    year={2024},
    eprint={2407.18690},
    archivePrefix={arXiv},
    primaryClass={cs.AI}
}
```
![image](https://github.com/user-attachments/assets/75d9769b-0edd-4caf-9d45-57d1e577054b)


# 🤝 Contributing

## 📝 Guidelines
This project welcomes contributions and suggestions.
Contributing to this project is straightforward and rewarding. Whether it's solving an issue, addressing a bug, enhancing documentation, or even correcting a typo, every contribution is valuable and helps improve RDAgent.

To get started, you can explore the issues list, or search for `TODO:` comments in the codebase by running the command `grep -r "TODO:"`.

<img src="https://img.shields.io/github/contributors-anon/microsoft/RD-Agent"/>

<a href="https://github.com/microsoft/RD-Agent/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=microsoft/RD-Agent&max=100&columns=15" />
</a>

Before we released RD-Agent as an open-source project on GitHub, it was an internal project within our group. Unfortunately, the internal commit history was not preserved when we removed some confidential code. As a result, some contributions from our group members, including Haotian Chen, Wenjun Feng, Haoxue Wang, Zeqi Ye, Xinjie Shen, and Jinhui Li, were not included in the public commits.

# ⚖️ Legal disclaimer
<p style="line-height: 1; font-style: italic;">The RD-agent is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. The RD-agent is aimed to facilitate research and development process in the financial industry and not ready-to-use for any financial investment or advice. Users shall independently assess and test the risks of the RD-agent in a specific use scenario, ensure the responsible use of AI technology, including but not limited to developing and integrating risk mitigation measures, and comply with all applicable laws and regulations in all applicable jurisdictions. The RD-agent does not provide financial opinions or reflect the opinions of Microsoft, nor is it designed to replace the role of qualified financial professionals in formulating, assessing, and approving finance products. The inputs and outputs of the RD-agent belong to the users and users shall assume all liability under any theory of liability, whether in contract, torts, regulatory, negligence, products liability, or otherwise, associated with use of the RD-agent and any inputs and outputs thereof.</p>
