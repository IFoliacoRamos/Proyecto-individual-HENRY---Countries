const { Activity, Country } = require ('../../db');

const getActivities = async (req,res) => {
    try {
        let allActivities = await Activity.findAll({
            include: {
                model: Country,
                through: { attributes: []},
                attributes: ["name"]
            }
        });
        if (allActivities.length === 0) return res.status(404).json('No se encontraron actividades');
        allActivities = allActivities.map(activity => {
            activity = activity.get({ plain: true });
            activity.Countries = activity.Countries.map(country => country.name);
            return activity;
        })
        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = getActivities;