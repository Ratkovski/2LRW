from setuptools import setup, find_packages


def read(filename):
    return [rq.strip() for rq in open(filename).readlines()]


setup(
    name="shawee",
    version="0.1.0",
    description="shawee project",
    packages=find_packages(),
    include_package_data=True,
    install_requires=read("requirements.txt"),
)