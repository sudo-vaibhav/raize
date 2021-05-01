import pandas as pd
df = pd.read_csv("./covid_19_india.csv")
def get_data():
    latest_df = df[df["Date"]=="2021-04-30"]
    latest_df.sort_values(by=['Confirmed'], inplace=True)
    top_six = latest_df[-5:]
    return {
        "cases": list(top_six["Confirmed"])[::-1],
        "states" : list(top_six["State/UnionTerritory"])[::-1]
    }